import App from "../App";
import Login from "@/pages/auths/Login";
import Register from "@/pages/auths/Register";
import FaqPage from "@/pages/FAQ/Faq";
import { Profile } from "@/pages/profile/Profile";
import Rides from "@/pages/ride/Rides";
import ContactPage from "@/pages/contact/Contact";
import FeaturePage from "@/pages/feature/Featured";
import AboutPage from "@/pages/about/AboutPage";


export const publicRoutes = [
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
]