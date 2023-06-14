import "./homepage.styles.scss";
import DeepFakeVideo from "../../assets/vid.mp4"
import {Button, ButtonGroup, Col, Container, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {UilCheckSquare} from "@iconscout/react-unicons";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";

const checkPoints = [
    "Unmasking Deep Fakes",
    "Empowering Security",
    "Protecting Identity"
];

export const Homepage = function () {
    const {user} = useContext(UserContext);
    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <video className={"w-100"} loop={true} muted autoPlay={true} src={DeepFakeVideo}/>
                </Col>
                <Col className={"align-self-center justify-content-center pt-lg-0 pt-3"} lg={6}>
                    <h1 className={"text-primary mb-3"}>Deep Fake Detection</h1>
                    {checkPoints.map(subtext => (
                        <p className="d-flex gap-1 text-white align-items-center">
                            <UilCheckSquare className={"text-primary"}/>{subtext}<br/>
                        </p>
                    ))}
                    <div className={"d-flex gap-2"}>
                        <Link to={user ? "/image" : "/signin"}>
                            <Button variant="dark">
                                <Spinner as={"span"} animation={"grow"} size={"sm"} variant={"primary"}/> Detect
                            </Button>
                        </Link>
                        <Link to={"/howitworks"}>
                            <Button variant="primary">
                                Learn More
                            </Button>
                        </Link>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}