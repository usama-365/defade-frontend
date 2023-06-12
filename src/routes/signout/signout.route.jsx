import {useContext, useState} from "react";
import {UserContext} from "../../contexts/user.context";
import {Button, Card, Container, Form, Spinner} from "react-bootstrap";

export const SignOutPage = function () {
    const {isAuthenticated, isAuthenticating, user, isSigningOut, signOut} = useContext(UserContext);
    // isAuthenticated();

    return (
        <>
            {isAuthenticating ? (
                <Spinner size={"lg"} animation={"border"} variant={"primary"}/>
            ) : (
                !user ? (
                    <h1>You are logged out! 😊</h1>
                ) : (
                    <Button onClick={() => signOut()} variant={"primary"}>{isSigningOut && <Spinner size={"sm"}/>} Sign Out</Button>
                )
            )}
        </>
    );
}