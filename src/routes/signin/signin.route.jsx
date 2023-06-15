import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

export const SignInPage = function () {
    const {isAuthenticating, user, signIn, isSigningIn} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email === "" || password === "")
            alert("Please fill all the fields")
        else
            signIn(email, password);
        setEmail("");
        setPassword("");
    }

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            {isAuthenticating ? (
                <Spinner size={"lg"} animation={"border"} variant={"primary"}/>
            ) : (
                user ? (
                    <>
                        <h2 className={"text-white-50 mb-4"}>You are logged in! 😊</h2>
                        <div className={"justify-content-center d-flex  flex-wrap gap-2"}>
                            <Link to={"/"}><Button variant={"dark"}>&larr; Go back to home</Button></Link>
                            <Link to={"/image"}><Button>Detect media</Button></Link>
                            <Link to={"/signout"}><Button variant={"dark"}>Sign Out</Button></Link>
                        </div>
                    </>
                ) : (
                    <Container>
                        <Card className="bg-dark mb-2">
                            <Card.Header className={"text-white-50 p-4"}>
                                Don't have an account? <Link className={"link-primary"} to={"/signup"}>Sign
                                Up</Link> instead.
                            </Card.Header>
                            <Card.Body className={"p-4"}>
                                <Form onSubmit={onSubmitHandler}>
                                    <Form.Group className="mb-4">
                                        <Form.Label className={"text-white"} htmlFor="email">Email</Form.Label>
                                        <Form.Control onChange={onEmailChangeHandler} type="email" name="email"
                                                      value={email} placeholder={"someone@example.com"} id={"email"}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className={"text-white"} htmlFor="password">Password</Form.Label>
                                        <Form.Control onChange={onPasswordChangeHandler} type="password" name="password"
                                                      value={password} placeholder={"xxxxxxxx"} id={"password"}/>
                                    </Form.Group>
                                    <Button type={"submit"} variant={"primary"}>{isSigningIn &&
                                        <Spinner size={"sm"}/>} Sign
                                        In</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Link to={"/"}><Button variant={"dark"}>&larr; Go back to home</Button></Link>
                    </Container>
                )
            )}
        </>
    );
}