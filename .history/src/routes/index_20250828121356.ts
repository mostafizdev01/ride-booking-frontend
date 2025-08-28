import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/redux/auths/Login";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/login",
        Component: Login
    },
])