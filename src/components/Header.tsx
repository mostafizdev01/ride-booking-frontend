import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "./ui/button";
import UserProfileDropdown from "./Profile";
import TextLogo from "../assets/images/TextAndLogoWithLime.png";
import { Menu, X } from "lucide-react";
import { useGetMeQuery } from "@/redux/features/users/user.api";

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

  
  const {data} = useGetMeQuery(undefined)

  return (
    <header className="fixed top-0 right-0 left-0 z-50 mx-auto bg-white/30 backdrop-blur-sm shadow-sm">
      <div className="max-w-9xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">

        {/* Left side: Logo + Menu */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <img src={TextLogo} alt="Logo" className="w-32 md:w-40" />
          </Link>
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
        </div>

        {/* Right side: User + Login */}
        <div className="flex items-center gap-4">
          <UserProfileDropdown />
          <div className=" hidden md:block">
            {!data ? <Button
              onClick={handleLogin}
              type="button"
              variant={"outline"}
              aria-label="Log in"
              className=" relative bg-lime-300 hover:bg-lime-400 cursor-pointer text-neutral-900 text-lg font-semibold items-center flex shrink-0 h-12 justify-center leading-7 max-w-full min-w-12 text-center w-12 p-0 rounded-xl border-solid border-lime-300 font-poppins md:w-auto md:px-[19px]"
            >
              <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 text-ellipsis text-nowrap overflow-hidden">
                <div className="items-center box-border flex shrink-0 h-6 justify-center text-nowrap w-6">
                  <img
                    src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-3.svg"
                    alt="Icon"
                    className="box-border h-[50px] text-nowrap w-5"
                  />
                </div>
                <span className="box-content inline text-nowrap">Log in</span>
              </div>
            </Button>:
            <Button
              onClick={handleLogin}
              type="button"
              variant={"outline"}
              aria-label="Log in"
              className=" relative bg-red-500 hover:bg-red-600 cursor-pointer text-neutral-900 text-lg font-semibold items-center flex shrink-0 h-12 justify-center leading-7 max-w-full min-w-12 text-center w-12 p-0 rounded-xl border-solid border-red-500 font-poppins md:w-auto md:px-[19px]"
            >
              <div className="items-center box-border gap-x-3 flex justify-center gap-y-3 text-ellipsis text-nowrap overflow-hidden">
                <div className="items-center box-border flex shrink-0 h-6 justify-center text-nowrap w-6">
                  <img
                    src="https://c.animaapp.com/merd0x40UYBnNr/assets/icon-3.svg"
                    alt="Icon"
                    className="box-border h-[50px] text-nowrap w-5"
                  />
                </div>
                <span className="box-content inline text-nowrap">Log out</span>
              </div>
            </Button>}
          </div>

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
          {!data ?<Button className=" bg-lime-400 text-black">Log in</Button>:
          <Button className=" bg-red-500 text-black">Log out</Button>}
        </div>
      )}
    </header>
  );
}
