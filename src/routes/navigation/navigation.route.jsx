import "./navigation.styles.scss";

import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {UilChannel} from "@iconscout/react-unicons";
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {Link, useLocation} from "react-router-dom";
import {ModeContext} from "../../contexts/mode.context";

const expandBreakPoint = 'sm';

export const Navigation = function () {
    const {user} = useContext(UserContext);
    const {dark} = useContext(ModeContext);
    const route = useLocation().pathname;
    return (
        <>
            <Navbar sticky={"top"} className={dark ? "shadow" : ""} expand={expandBreakPoint} bg={"dark"} variant={'dark'}>
                <Container>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expandBreakPoint}`}/>
                    <Navbar.Brand>
                        <Link to={"/"}><UilChannel className={`${route === '/' ? 'text-primary' : 'text-white'}`}
                                                   size={32}/></Link>
                    </Navbar.Brand>
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expandBreakPoint}`}
                                      aria-labelledby={`offcanvasNavbarLabel-expand-${expandBreakPoint}`}
                                      placement="start" className={"bg-dark"}>
                        <Offcanvas.Header className={"bg-primary"} closeButton>
                            <Offcanvas.Title className="text-dark"
                                             id={`offcanvasNavbarLabel-expand-${expandBreakPoint}`}>
                                <Link to={"/"}><UilChannel className={`${route === '/' ? 'text-dark' : 'text-white'}`}
                                                           size={32}/></Link>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto d-flex gap-3">
                                <Link
                                    className={`${route.includes('howitworks') ? 'text-primary' : 'text-white'}`}
                                    to={"/howitworks"}>How it Works</Link>
                                <Link className={`${route.includes('about') ? 'text-primary' : 'text-white'}`}
                                      to={"/about"}>About Us</Link>
                                {user ? (
                                    <>
                                        <Link
                                            className={`${route.includes('image') ? 'text-primary' : 'text-white'}`}
                                            to={"/image"}>Media Detection</Link>
                                        <Link
                                            className={`${route.includes('signout') ? 'text-primary' : 'text-white'}`}
                                            to={"/signout"}>Sign
                                            Out</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            className={`${route.includes('signin') ? 'text-primary' : 'text-white'}`}
                                            to={"/signin"}>Sign In</Link>
                                        <Link
                                            className={`${route.includes('signup') ? 'text-primary' : 'text-white'}`}
                                            to={"/signup"}>Sign Up</Link>
                                    </>
                                )}
                            </Nav>
                        </Offcanvas.Body>

                    </Navbar.Offcanvas>


                </Container>
            </Navbar>
        </>
    );
}