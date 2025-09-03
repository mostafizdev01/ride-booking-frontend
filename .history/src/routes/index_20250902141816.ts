import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import Simple404Page from "@/pages/Error";
import Dashboard from "@/pages/Dashboard/Dashboard";
import FaqPage from "@/pages/Faq";
import { Profile } from "@/pages/profile/Profile";
import Rides from "@/pages/ride/Rides";



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
        path: "/profile",
        Component: Profile
    },
    {
        path: "/faq",
        Component: FaqPage
    },
    {
        path: "/rides",
        Component: Rides
    },
    {
        path: "*",
        Component: Simple404Page
    },
])