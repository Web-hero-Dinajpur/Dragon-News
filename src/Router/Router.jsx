import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Pages from "../Pages/Pages";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: '/category/:id',
                element: <Pages></Pages>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
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