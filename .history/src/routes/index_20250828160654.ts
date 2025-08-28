import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/redux/pages/auths/Login";
import Register from "@/redux/pages/auths/Register";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
])