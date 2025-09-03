import { useState } from "react";
import { Button } from "./ui/button";
import UserProfileDropdown from "./Profile";
import TextLogo from "../assets/images/TextAndLogoWithLime.png";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={TextLogo} alt="Logo" className="w-32 md:w-40" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-lime-600 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <UserProfileDropdown />
          <Button
            onClick={handleLogin}
            type="button"
            variant="outline"
            className="font-semibold"
          >
            Log in
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col px-4 py-3 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-700 hover:text-lime-600 font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
