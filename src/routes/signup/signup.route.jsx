import {Button, Card, Container, Form, Spinner} from "react-bootstrap";
import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {Link} from "react-router-dom";

export const SignUpPage = function () {
    const {isAuthenticating, user, signUp, isSigningUp} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (email === "" || password === "" || name === "" || gender === "")
            alert("Please fill all the fields")
        else
            signUp(name, email, password, gender);
        setEmail("");
        setPassword("");
        setGender("");
        setName("");
    }

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const onGenderChangeHandler = (e) => {
        let newValue = e.target.value.toUpperCase();
        if (newValue === "")
            setGender(newValue);
        else {
            const lastCharacter = newValue[newValue.length - 1].toUpperCase();
            if ('MFO'.includes(lastCharacter))
                setGender(lastCharacter);
        }
    }

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
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
                                Already have an account? <Link className={"link-primary"} to={"/signin"}>Sign
                                In</Link> instead.
                            </Card.Header>
                            <Card.Body className={"p-4"}>
                                <Form onSubmit={onSubmitHandler}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className={"text-white"} htmlFor="name">Name</Form.Label>
                                        <Form.Control onChange={onNameChangeHandler} type="name" name="name"
                                                      value={name} placeholder={"John Doe"} id={"name"}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className={"text-white"} htmlFor="email">Email</Form.Label>
                                        <Form.Control onChange={onEmailChangeHandler} type="email" name="email"
                                                      value={email} placeholder={"someone@example.com"} id={"email"}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className={"text-white"} htmlFor="password">Password</Form.Label>
                                        <Form.Control onChange={onPasswordChangeHandler} type="password" name="password"
                                                      value={password} placeholder={"xxxxxxxx"} id={"password"}/>
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label className={"text-white"} htmlFor="gender">Gender (M, F,
                                            O)</Form.Label>
                                        <Form.Control onChange={onGenderChangeHandler} type="gender" name="gender"
                                                      value={gender} placeholder={"G"} id={"gender"}/>
                                    </Form.Group>
                                    <Button type={"submit"} variant={"primary"}>{isSigningUp &&
                                        <Spinner size={"sm"}/>} Sign
                                        Up</Button>
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