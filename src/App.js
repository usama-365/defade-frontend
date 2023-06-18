import {createBrowserRouter, Link, Outlet, RouterProvider} from "react-router-dom";
import {Homepage} from "./routes/homepage/homepage.route";
import {Navigation} from "./routes/navigation/navigation.route";
import {UserContextProvider} from "./contexts/user.context";

import {AboutPage} from "./routes/about/about.route";
import {SignInPage} from "./routes/signin/signin.route";
import {SignOutPage} from "./routes/signout/signout.route";
import {SignUpPage} from "./routes/signup/signup.route";
import {ImagesPage} from "./routes/images/images.route";
import {ImagesContextProvider} from "./contexts/images.context";
import {HowItWorksPage} from "./routes/how-it-works/how-it-works.route";
import {Button} from "react-bootstrap";
import {ModeContextProvider} from "./contexts/mode.context";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="height-control bg-secondary">
                <Navigation/>
                <div style={{minHeight: '80vh'}}
                     className="d-flex flex-column align-items-center justify-content-center py-xxl-5 py-xl-5 py-lg-5 py-md-4 py-sm-3 py-2">
                    <Outlet/>
                </div>
            </div>
        ),
        errorElement: (
            <div className="height-control bg-secondary">
                <Navigation/>
                <div style={{minHeight: '80vh'}}
                     className="d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-primary">This page doesn't exist 😶</h3>
                    <Link to={"/"}><Button variant={"dark"}>&larr; Go back to home</Button></Link>
                </div>
            </div>
        ),
        children: [
            {
                index: true,
                element: <Homepage/>
            },
            {
                path: 'about',
                name: "About",
                element: <AboutPage/>
            },
            {
                path: 'signin',
                name: "Sign In",
                element: <SignInPage/>
            },
            {
                path: 'signout',
                name: "Sign Out",
                element: <SignOutPage/>
            },
            {
                path: 'signup',
                name: "Sign Up",
                element: <SignUpPage/>
            },
            {
                path: 'image',
                name: "Image Check",
                element: <ImagesPage/>
            },
            {
                path: 'howitworks',
                name: "How it Works",
                element: <HowItWorksPage/>
            }
        ]
    }]
)

function App() {
    return (
        <UserContextProvider>
            <ModeContextProvider>
                <ImagesContextProvider>
                    <RouterProvider router={router}/>
                </ImagesContextProvider>
            </ModeContextProvider>
        </UserContextProvider>
    );
}

export default App;
