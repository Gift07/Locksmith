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
  const phoneNumber = "+12025846476";
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
        <button className="py-2 px-12 bg-green text-white">
          <a href={`tel:${phoneNumber}`}>Call Us Now</a>
        </button>
      </div>
      <button className="py-2 px-12 bg-green text-white flex lg:md:hidden">
        <a href={`tel:${phoneNumber}`}>Call Us Now</a>
      </button>
    </div>
  );
};

export default Navbar;
