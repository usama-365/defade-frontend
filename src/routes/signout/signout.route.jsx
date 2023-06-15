import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";
import {Button, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";

export const SignOutPage = function () {
    const {isAuthenticating, user, isSigningOut, signOut} = useContext(UserContext);

    return (
        <>
            {isAuthenticating ? (
                <Spinner size={"lg"} animation={"border"} variant={"primary"}/>
            ) : (
                !user ? (
                    <>
                        <h2 className={"text-white-50 mb-4"}>You are signed out! 😊</h2>
                        <div className={"justify-content-center d-flex flex-wrap gap-2"}>
                            <Link to={"/"}><Button variant={"dark"}>&larr; Go back to home</Button></Link>
                            <Link to={"/signin"}><Button>Sign In</Button></Link>
                            <Link to={"/signup"}><Button variant={"outline-primary"}>Sign Up</Button></Link>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className={"text-white-50 mb-4"}>Sign Out Here! 😊</h2>
                        <Button onClick={() => signOut()} variant={"primary"}>{isSigningOut &&
                            <Spinner size={"sm"}/>} Sign Out</Button>
                    </>
                )
            )}
        </>
    );
}