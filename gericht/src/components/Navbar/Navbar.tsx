import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-black py-4 px-6 sm:px-8">

      <div className="flex items-center justify-start">
        <img
          src={images.gericht}
          alt="app logo"
          className="w-[150px] max-[2000px]:w-[210px] max-[650px]:w-[110px]"
        />
      </div>

      <ul className="flex-1 hidden max-[1150px]:hidden md:flex items-center justify-center list-none">
        {["Home", "About", "Menu", "Awards", "Contact"].map((item) => (
          <li
            key={item}
            className="mx-4 text-white font-alt text-[16px] capitalize cursor-pointer hover:text-gray-300 transition-all"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="hidden max-[650px]:hidden md:flex items-center justify-end">
        <a
          href="#login"
          className="mx-4 text-white font-alt text-[16px] capitalize no-underline transition-all duration-75 ease-in-out hover:border-b hover:border-golden"
        >
          Log In / Register
        </a>
        <div className="w-[1px] h-[30px] bg-grey" />
        <a
          href="/"
          className="mx-4 text-white font-alt text-[16px] capitalize no-underline transition-all duration-75 ease-in-out hover:border-b hover:border-golden"
        >
          Book Table
        </a>
      </div>

      <div className="flex md:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />

        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center z-50 transition-all duration-500 ease-in-out">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="absolute top-5 right-5 text-[#DCCA87] cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none text-center">
              {["Home", "About", "Menu", "Awards", "Contact"].map((item) => (
                <li
                  key={item}
                  className="m-8 text-[#DCCA87] text-3xl font-alt cursor-pointer hover:text-white transition-all"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
