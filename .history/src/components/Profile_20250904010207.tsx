"use client";
import { useState, useEffect, useRef, type ReactNode } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { MdDashboard, MdCreditCard, MdLogout } from "react-icons/md";
import { useNavigate } from "react-router";

// ===== Dropdown Components =====
interface DropdownMenuProps {
  children: ReactNode;
  trigger: ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-xl shadow-xl bg-white dark:bg-zinc-900 ring-1 ring-black/10 z-50 animate-in fade-in-0 zoom-in-95">
          {children}
        </div>
      )}
    </div>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const DropdownMenuItem = ({ children, onClick }: DropdownMenuItemProps) => (
  <button
    onClick={onClick}
    className="w-full text-left text-zinc-700 dark:text-zinc-300 flex items-center px-4 py-2 text-sm rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
  >
    {children}
  </button>
);

const DropdownMenuSeparator = () => (
  <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-700" />
);

// ===== Main Component =====
export default function UserProfileDropdown() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center font-sans">
      <DropdownMenu
        trigger={
          <div className="p-3 bg-white text-xl cursor-pointer shadow-sm rounded-full hover:ring-2 hover:ring-zinc-300 transition">
            <FaRegUserCircle />
          </div>
        }
      >
        {/* User Info */}
        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                John Doe
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                john@example.com
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Pro Plan
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="py-1">
          <DropdownMenuItem onClick={() => navigate("/dashboard/profile")}>
            <FaRegUserCircle className="mr-3 h-4 w-4 text-zinc-500" /> Your Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/create-ride")}>
            <FaRegUserCircle className="mr-3 h-4 w-4 text-zinc-500" /> Create Ride
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard")}>
            <MdDashboard className="mr-3 h-4 w-4 text-zinc-500" /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/dashboard/billing")}>
            <MdCreditCard className="mr-3 h-4 w-4 text-zinc-500" /> Billing & Plans
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator />

        <div className="py-1">
          <DropdownMenuItem onClick={() => navigate("/dashboard/help")}>
            <BiHelpCircle className="mr-3 h-4 w-4 text-zinc-500" /> Help & Support
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/signout")}>
            <MdLogout className="mr-3 h-4 w-4 text-zinc-500" /> Sign Out
          </DropdownMenuItem>
        </div>
      </DropdownMenu>
    </div>
  );
}
