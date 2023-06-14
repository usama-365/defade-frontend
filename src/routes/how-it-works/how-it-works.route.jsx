import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const steps = [
    {
        title: "Sign In/Up",
        description: "Create or login to your account"
    },
    {
        title: "Upload Media",
        description: "Upload the image or video"
    },
    {
        title: "Get Results",
        description: `The server will process & respond`
    }
]

export const HowItWorksPage = function () {

    return (
        <Container>
        <Row className={"mb-2"}>
            {steps.map(({title, description}, index) => (
                <Col style={{textAlign: 'right'}} className={"mt-3"} key={index} lg={4}>
                    <h1 className="text-white-50 display-1">{(index + 1).toString().padStart(2, "0")}</h1>
                    <h1 className={"text-primary"}>{title}</h1>
                    <p className="text-white">{description}</p>
                </Col>
            ))}
        </Row>
            <div className={"justify-content-center d-flex gap-2"}>
                <Link to={"/"}><Button variant={"dark"}>&larr; Go back to home</Button></Link>
                <Link to={"/about"}><Button>See our Team &rarr;</Button></Link>
            </div>

        </Container>
    );
}