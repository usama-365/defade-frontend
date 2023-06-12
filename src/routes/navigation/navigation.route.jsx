import "./navigation.styles.scss";

import {Container, Nav, Navbar} from "react-bootstrap";
import {UilChannel} from "@iconscout/react-unicons";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {Link} from "react-router-dom";

export const Navigation = function () {
    const {user} = useContext(UserContext);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to={"/"}><UilChannel className={"text-primary"} size={32}/></Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#"><Link className="text-white" to={"about"}>About Us</Link></Nav.Link>
                        {user ? (
                            <>
                                <Nav.Link href="#"><Link className="text-white" to={"image"}>Image
                                    Check</Link></Nav.Link>
                                <Nav.Link href="#"><Link className="text-white" to={"signout"}>Sign
                                    Out</Link></Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link href="#"><Link className="text-white" to={"signin"}>Sign In</Link></Nav.Link>
                                <Nav.Link href="#"><Link className="text-white" to={"signup"}>Sign Up</Link></Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}