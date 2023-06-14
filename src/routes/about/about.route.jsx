import {Button, Card, Col, Container, Row} from "react-bootstrap";
import GroupMemberImage1 from "../../assets/us/1.jpg";
import GroupMemberImage2 from "../../assets/us/2.jpg";
import GroupMemberImage3 from "../../assets/us/3.jpg";
import {Link} from "react-router-dom";

const aboutProfiles = [
    {
        name: "Muhammad Hamza",
        regNo: "1064",
        description: "Leader & Coordinator",
        image: GroupMemberImage1
    },
    {
        name: "Muhammad Hassan",
        regNo: "1065",
        description: "AI & ML Developer",
        image: GroupMemberImage2
    },
    {
        name: "M. Usama Arif",
        regNo: "1069",
        description: "Web & Mobile Developer",
        image: GroupMemberImage3
    }
];


export const AboutPage = function () {
    return (
        <Container>
            <Row>
                {aboutProfiles.map(({name, regNo, description, image}) => (
                    <Col md={4}>
                        <Card className="bg-dark text-primary mb-3">
                            <Card.Img style={{filter: 'grayscale(100%)'}} variant="top" src={image} loading={"lazy"}/>
                            <Card.Body>
                                <h1 className="text-white-50">{regNo}</h1>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className="text-white">
                                    {description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className={"d-flex gap-2"}>
            <Link to={"/howitworks"}><Button className={"mr-2"} variant={"dark"}>&larr; How it works</Button></Link>
            <Link to={"/"}><Button variant={"primary"}>&#9750; Go back to home</Button></Link>
            </div>
        </Container>
    );
}