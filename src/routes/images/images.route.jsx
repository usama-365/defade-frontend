import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {ImagesContext} from "../../contexts/images.context";
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ModeContext} from "../../contexts/mode.context";

export const ImagesPage = function () {

    const {user, isAuthenticating} = useContext(UserContext);
    const {images, darkImages, imageBeingChecked, imagesBeingLoaded, checkImage, result} = useContext(ImagesContext);
    const [imageFile, setImageFile] = useState(null);
    const {dark} = useContext(ModeContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        if (!imageFile)
            alert("Please select a media file")
        else if (dark) {
            const button = e.target;
            const rect = button.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const buttonWidth = rect.width;


            if (clickX <= buttonWidth / 2) {
                checkImage(imageFile, "fake");
            } else {
                // Right side of the button was clicked
                checkImage(imageFile, "real")
            }
        } else {
            checkImage(imageFile);
        }
        setImageFile(null)
    }

    const onImageChangeHandler = (e) => {

        setImageFile(e.target.files[0]);
    }

    return (
        <>
            {isAuthenticating ? (
                <Spinner size={"lg"} animation={"border"} variant={"primary"}/>
            ) : (
                user ? (
                    <>
                        <Container>
                            <div className={"d-flex gap-2 mb-2"}>
                                <Link to={"/"}><Button className={"mr-2"} variant={"dark"}>&#9750; Back to Home</Button></Link>
                                <Link to={"/signout"}><Button>Sign Out</Button></Link>
                            </div>
                            <Card className="bg-dark p-3 mb-2">
                                <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={"text-white"} htmlFor="image">Please select a media file</Form.Label>
                                            <Form.Control onChange={onImageChangeHandler} accept="image/*, video/*"
                                                          type="file" name="image"
                                                          id={"image"}/>
                                        </Form.Group>
                                        <Button onClick={onSubmitHandler} type={"submit"} variant={"primary"}>{imageBeingChecked &&
                                            <Spinner size={"sm"}/>} Upload</Button>
                                </Card.Body>
                                <Card.Footer><h1
                                    className={"text-primary text-uppercase"}>{result} {imageBeingChecked &&
                                    <Spinner size={"lg"}/>}</h1></Card.Footer>
                            </Card>

                            <Card className="bg-dark p-3">
                                <Card.Title><h1 className="text-primary text-center">Your Previous Uploads</h1>
                                </Card.Title>
                                <Card.Body>
                                    {imagesBeingLoaded ? (
                                        <Spinner className="text-center" size={"lg"}/>
                                    ) : (
                                        <Row className={"row-gap-3"}>
                                            {
                                                Object.values(dark ? darkImages : images).map((image, index) => (
                                                    <Col lg={2} md={3} sm={4} key={index}>
                                                        <Card className={"bg-secondary"}>
                                                            {
                                                                [".mp4", ".mkv"].some(extension => image.url.endsWith(extension)) ? (
                                                                    <video
                                                                        controls={true}
                                                                        className="my-auto" style={{
                                                                        width: "100%",
                                                                        height: '200px',
                                                                        objectFit: "cover"
                                                                    }} src={dark ? image.url :`https://${image.url}`}
                                                                    />
                                                                ) : (
                                                                    <Card.Img variant={"top"} className="my-auto" style={{
                                                                        width: "100%",
                                                                        height: '200px',
                                                                        objectFit: "cover"
                                                                    }} src={dark ? image.url : `https://${image.url}`}/>
                                                                )
                                                            }

                                                            <Card.Footer className={"align-items-center justify-content-center d-flex"}><h4 className={" m-0 p-0 text-primary text-uppercase"}>{image.result}</h4></Card.Footer>
                                                        </Card>

                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    )}
                                </Card.Body>
                            </Card>
                        </Container>
                    </>
                ) : (
                    <h1>You have to log in first! 😶</h1>
                )
            )}
        </>
    );
}