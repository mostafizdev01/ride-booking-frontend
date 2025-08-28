import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/redux/pages/auths/Login";
import Register from "@/redux/pages/auths/Register";
import Simple404Page from "@/redux/pages/Error";
import Dashboard from "@/redux/pages/Dashboard/Dashboard";



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
    {
        path: "/dashboard",
        Component: Dashboard
    },
    {
        path: "*",
        Component: Simple404Page
    },
])