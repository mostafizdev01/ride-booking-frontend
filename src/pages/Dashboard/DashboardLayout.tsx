// src/components/layout/DashboardLayout.tsx
import { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";
import { Outlet } from "react-router";
export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const role = "driver"

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <DashboardSidebar role={role} isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <DashboardNavbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
