import { AiOutlineMenu } from "react-icons/ai";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full h-20 ${
        navbarColor ? "bg-blue" : "bg-transparent"
      }  text-white flex items-center justify-between px-4 lg:md:px-[10%] fixed z-[1000] duration-200 ease-in-out`}
    >
      <div>
        <h1 className="font-bold text-xl">JB Locksmith</h1>
      </div>
      <div className=" hidden lg:md:flex lg:md:items-center lg:md:gap-x-8">
        <ul className="flex items-center gap-x-4">
          <li className="text-green">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Team</li>
        </ul>
        <button className="py-2 px-4 bg-green text-white">
          Make appointment
        </button>
      </div>
      <div className="text-lg  flex lg:md:hidden">
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navbar;
