import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../pages/CategoryNews";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]

    },
    {
        path: "/news",
        element: <h2>Hello news</h2>
    },
    {
        path: 'auth',
        element: <h2>Login page</h2>
    },
    {
        path: '*',
        element: <h3>error page</h3>
    }
])

export default Routes;