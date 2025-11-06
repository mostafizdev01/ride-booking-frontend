// src/components/layout/Sidebar.tsx

import { Link, NavLink } from "react-router";
import { DashboardSidebarMenu } from "./DashboardSidebarMenu";
import { IconLogout } from "@tabler/icons-react";

interface SidebarProps {
    role: "rider" | "driver" | "admin";
    isOpen: boolean;
    toggleSidebar: () => void;
}

export default function DashboardSidebar({ role, isOpen, toggleSidebar }: SidebarProps) {
    const routes = DashboardSidebarMenu[role] || [];

    return (
        <aside
            className={`fixed flex flex-col justify-between top-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 z-40
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}
        >
            <div>
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <Link to={"/"} className="text-2xl font-bold text-blue-600">ZoomRide</Link>
                    <button className="md:hidden" onClick={toggleSidebar}>
                        ✕
                    </button>
                </div>

                <nav className="mt-6 space-y-2 px-3">
                    {routes.map(({ name, path, icon: Icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            end
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 font-semibold text-black hover:bg-blue-200 transition
              ${isActive ? "bg-blue-200" : ""}`
                            }
                            onClick={toggleSidebar}
                        >
                            <Icon className="w-5 h-5" />
                            {name}
                        </NavLink>
                    ))}
                </nav>
            </div>
            {/* ======= Bottom: Logout Button ======= */}
            <button
                className="flex mb-3 w-[230px] mx-auto items-center justify-center gap-2 py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition-all duration-150"
            >
                <IconLogout size={18} />
                <span>Logout</span>
            </button>
        </aside>
    );
}
