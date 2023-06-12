import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";

export const SignInPage = function () {
    const {isAuthenticated, isAuthenticating, user, signIn, isSigningIn} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // isAuthenticated();

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
                    <h1>You are logged in! 😊</h1>
                ) : (
                    <Container>
                        <Card className="bg-dark p-5">
                            <Form onSubmit={onSubmitHandler}>
                                <Form.Group className="mb-5">
                                    <Form.Label className={"text-white"} htmlFor="email">Email</Form.Label>
                                    <Form.Control onChange={onEmailChangeHandler} type="email" name="email"
                                                  value={email} placeholder={"someone@example.com"} id={"email"}/>
                                </Form.Group>
                                <Form.Group className="mb-5">
                                    <Form.Label className={"text-white"} htmlFor="password">Password</Form.Label>
                                    <Form.Control onChange={onPasswordChangeHandler} type="password" name="password"
                                                  value={password} placeholder={"xxxxxxxx"} id={"password"}/>
                                </Form.Group>
                                <Button type={"submit"} variant={"primary"}>{isSigningIn && <Spinner size={"sm"}/>} Sign
                                    In</Button>
                            </Form>
                        </Card>
                    </Container>
                )
            )}
        </>
    );
}