import {Card, Col, Container, Row} from "react-bootstrap";
import GroupMemberImage1 from "../../assets/us/1.jpg";
import GroupMemberImage2 from "../../assets/us/2.jpg";
import GroupMemberImage3 from "../../assets/us/3.jpg";

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
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>


        </Container>
    );
}