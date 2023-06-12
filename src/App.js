import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Homepage} from "./routes/homepage/homepage.route";
import {Navigation} from "./routes/navigation/navigation.route";
import {UserContextProvider} from "./contexts/user.context";

import {AboutPage} from "./routes/about/about.route";
import {SignInPage} from "./routes/signin/signin.route";
import {SignOutPage} from "./routes/signout/signout.route";
import {SignUpPage} from "./routes/signup/signup.route";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="height-control bg-secondary">
                <Navigation/>
                <div style={{minHeight: '80vh'}} className="d-flex flex-column align-items-center justify-content-center">
                    <Outlet/>
                </div>
            </div>
        ),
        errorElement: (
            <div className="height-control bg-secondary">
                <Navigation/>
                <div style={{minHeight: '80vh'}} className="d-flex flex-column align-items-center justify-content-center">
                    <h3 className="text-primary">You weren't supposed to be here 😶</h3>
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
                element: <AboutPage/>
            },
            {
                path: 'signin',
                element: <SignInPage/>
            },
            {
                path: 'signout',
                element: <SignOutPage/>
            },
            {
                path: 'signup',
                element: <SignUpPage/>
            }
        ]
    }
])

function App() {
    return (
        <UserContextProvider>
            <RouterProvider router={router}/>
        </UserContextProvider>
    );
}

export default App;
