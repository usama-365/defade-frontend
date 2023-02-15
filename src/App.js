import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Homepage} from "./routes/homepage/homepage.route";
import {Navigation} from "./routes/navigation/navigation.route";
import {Footer} from "./routes/footer/footer.route";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navigation/>
                <Outlet/>
                <Footer/>
            </>
        ),
        children: [
            {
                index: true,
                element: <Homepage/>
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
