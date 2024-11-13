import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";


const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>

    },
    {
        path : "/news",
        element : <h2>Hello news</h2>
    },
    {
        path : 'auth',
        element : <h2>Login page</h2>
    },
    {
        path : '*',
        element : <h3>error page</h3>
    }
])

export default Routes;