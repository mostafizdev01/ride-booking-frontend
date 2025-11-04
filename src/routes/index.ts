import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import Simple404Page from "@/pages/Error";
import FaqPage from "@/pages/Faq";
import { Profile } from "@/pages/profile/Profile";
import Rides from "@/pages/ride/Rides";
import ContactPage from "@/pages/contact/Contact";
import FeaturePage from "@/pages/feature/Featured";
import AboutPage from "@/pages/about/AboutPage";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";



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
        Component: Register,
    },
    {
        path: "/dashboard",
        Component: DashboardLayout
    },
    {
        path: "/profile",
        Component: Profile
    },
    {
        path: "/about",
        Component: AboutPage
    },
    {
        path: "/features",
        Component: FeaturePage
    },
    {
        path: "/faq",
        Component: FaqPage
    },
    {
        path: "/contact",
        Component: ContactPage
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