import {createContext, useEffect, useState} from "react";

export const hostname = 'https://defadebackend.online';
const signInURL = `${hostname}/api/users/login`;
const signUpURL = `${hostname}/api/users/register`;
const signOutURL = `${hostname}/api/users/logout`;
const userDetailURL = `${hostname}/api/users/user`;

const DEFAULT_VALUES = {
    user: null,
    jwt: '',
    isSigningIn: false,
    isSigningOut: false,
    isSigningUp: false,
    isAuthenticating: false
}

export const UserContext = createContext({
    user: DEFAULT_VALUES.user,
    jwt: DEFAULT_VALUES.jwt,
    signOut: () => null,
    signIn: (email, password) => null,
    signUp: (name, email, password, gender) => null,
    isAuthenticated: () => null,
    isSigningIn: DEFAULT_VALUES.isSigningIn,
    isSigningOut: DEFAULT_VALUES.isSigningOut,
    isSigningUp: DEFAULT_VALUES.isSigningUp,
    isAuthenticating: DEFAULT_VALUES.isAuthenticating,
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
    const [jwt, setJwt] = useState(DEFAULT_VALUES.jwt);
    const [user, setUser] = useState(DEFAULT_VALUES.user);
    const [isSigningIn, setIsSigningIn] = useState(DEFAULT_VALUES.isSigningIn);
    const [isSigningOut, setIsSigningOut] = useState(DEFAULT_VALUES.isSigningOut);
    const [isSigningUp, setIsSigningUp] = useState(DEFAULT_VALUES.isSigningUp);
    const [isAuthenticating, setIsAuthenticating] = useState(DEFAULT_VALUES.isAuthenticating);


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
        isAuthenticated();
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