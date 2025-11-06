import { createBrowserRouter } from "react-router";
import Simple404Page from "@/pages/notFound/Error";
import { riderRoutes } from "./riderRoutes";
import { publicRoutes } from "./publicRoutes";
import { driverRoutes } from "./driverRoutes";
import { adminRoutes } from "./adminRoutes";



export const router = createBrowserRouter([
    ...publicRoutes,
    ...riderRoutes,
    ...driverRoutes,
    ...adminRoutes,
    {
        path: "*",
        Component: Simple404Page
    },
])