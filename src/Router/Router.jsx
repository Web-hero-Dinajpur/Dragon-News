import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element:<Home></Home>
    },
    {
        path: 'news',
        element: <h1>hello news page</h1>
    },
    {
        path: 'auth',
        element: <h1>hello Login page</h1>
    },
    {
        path: '*',
        element: <h1>error</h1>
    }
])

export default Router;