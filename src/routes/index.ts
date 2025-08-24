import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "./About";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/about",
        Component: About
    },
])