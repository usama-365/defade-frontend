import {createContext, useEffect, useState} from "react";

export const hostname = 'https://ec2-13-232-134-9.ap-south-1.compute.amazonaws.com';
const signInURL = `${hostname}/api/users/login`;
const signUpURL = `${hostname}/api/users/register`;
const signOutURL = `${hostname}/api/users/logout`;
const userDetailURL = `${hostname}/api/users/user`;

export const UserContext = createContext({
    user: null,
    jwt: '',
    signOut: () => null,
    signIn: (email, password) => null,
    signUp: (name, email, password, gender) => null,
    isAuthenticated: () => null,
    isSigningIn: false,
    isSigningOut: false,
    isSigningUp: false,
    isAuthenticating: false
});

const makePostRequest = function (url, body) {
    return fetch(url, {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        ...(
            body ? {
                body: JSON.stringify(body),
            } : {}
        )
    })
}

const getUserFromJWT = async function () {
    const res = await fetch(userDetailURL, {credentials: 'include',});
    return await res.json();
}

export const UserContextProvider = function ({children}) {
    const [jwt, setJwt] = useState('');
    const [user, setUser] = useState(null);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);



    const isAuthenticated = async () => {
        setIsAuthenticating(false);
        const response = await getUserFromJWT();
        let toReturn = false;
        if (response?.email) {
            setUser(response);
            toReturn = true;
        } else {
            setJwt('');
            setUser(null);
        }
        setIsAuthenticating(false);
        return toReturn;
    }

    useEffect(() => {
        isAuthenticated()
    }, []);

    const signOutHandler = () => {
        setIsSigningOut(true);
        makePostRequest(signOutURL)
            .then(() => setJwt(''))
            .then(() => setUser(null))
            .then(() => setIsSigningOut(false));
    }

    const signInHandler = (email, password) => {
        setIsSigningIn(true);
        makePostRequest(signInURL, {email, password})
            .then(res=> {console.log(res); return res;})
            .then(res => res.json())
            .then(response => {
                if (response?.jwt) {
                    setJwt(response.jwt);
                    getUserFromJWT().then(setUser);
                } else {
                    alert(JSON.stringify(response));
                }
            })
            .finally(() => setIsSigningIn(false));
    }

    const signUpHandler = (name, email, password, gender) => {
        setIsSigningUp(true);
        makePostRequest(signUpURL, {name, email, password, gender})
            .then(res => res.json())
            .then(res => {
                if (res?.email) {
                    setUser({...res});
                    signInHandler(email, password);
                } else {
                    alert(JSON.stringify(res));
                }
            })
            .finally(() => setIsSigningUp(false));
    }

    const values = {
        jwt,
        user,
        signIn: signInHandler,
        signOut: signOutHandler,
        signUp: signUpHandler,
        isAuthenticated,
        isAuthenticating,
        isSigningUp,
        isSigningIn,
        isSigningOut
    };

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};