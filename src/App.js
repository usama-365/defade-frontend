import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Homepage} from "./routes/homepage/homepage.route";
import {Navigation} from "./routes/navigation/navigation.route";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigation/>,
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
