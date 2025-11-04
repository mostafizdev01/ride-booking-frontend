// src/components/layout/Navbar.tsx
import { Menu } from "lucide-react";

export default function DashboardNavbar({
    toggleSidebar,
}: {
    toggleSidebar: () => void;
}) {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-30 flex items-center justify-between px-6 py-3">
            {/* Left - Logo or Sidebar Toggle */}
            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="md:hidden text-gray-700">
                    <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-semibold text-gray-700 hidden md:block">
                    Dashboard
                </h1>
            </div>

            {/* Right - Profile */}
            <div className="flex items-center gap-3">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border border-gray-300"
                />
            </div>
        </header>
    );
}
