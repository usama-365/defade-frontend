import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {ImagesContext} from "../../contexts/images.context";
import {Button, Card, Col, Container, Form, Row, Spinner} from "react-bootstrap";

export const ImagesPage = function () {

    const {user, isAuthenticating} = useContext(UserContext);
    const {images, imageBeingChecked, imagesBeingLoaded, checkImage, result} = useContext(ImagesContext);
    const [imageFile, setImageFile] = useState(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!imageFile)
            alert("Please select an image")
        else
            checkImage(imageFile);
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
                            <Card className="bg-dark p-4 mb-2">
                                <Card.Body>
                                    <Form onSubmit={onSubmitHandler}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className={"text-white"} htmlFor="image">Please select an
                                                image</Form.Label>
                                            <Form.Control onChange={onImageChangeHandler} accept="image/jpeg, image/jpg"
                                                          type="file" name="image"
                                                          id={"image"}/>
                                        </Form.Group>
                                        <Button type={"submit"} variant={"primary"}>{imageBeingChecked &&
                                            <Spinner size={"sm"}/>} Upload</Button>
                                    </Form>
                                </Card.Body>
                                <Card.Footer><h1
                                    className={"text-primary text-uppercase"}>{result} {imageBeingChecked &&
                                    <Spinner size={"lg"}/>}</h1></Card.Footer>
                            </Card>

                        </Container>
                        <Container>
                            <Card className="bg-dark p-5">
                                <Card.Title><h1 className="text-primary text-center">Your Previous Uploads</h1>
                                </Card.Title>
                                <Card.Body>
                                    {imagesBeingLoaded ? (
                                        <Spinner className="text-center" size={"lg"}/>
                                    ) : (
                                        <Row>
                                            {
                                                Object.values(images).map(image => (
                                                    <Col key={image.url}
                                                         className="d-flex align-items-center justify-content-center flex-column gap-2">
                                                        <img className="my-auto" style={{
                                                            width: "200px",
                                                            height: "200px",
                                                            objectFit: "cover"
                                                        }} src={`https://${image.url}`}/>
                                                        <h2 className={"text-uppercase text-center text-primary"}>{image.result}</h2>
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