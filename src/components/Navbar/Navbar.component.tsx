import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex items-center justify-between bg-background py-4 px-6 sm:px-8">

      <div className="flex items-center justify-start">
        <img
          src={images.gericht}
          alt="app logo"
          className="w-[150px] max-[2000px]:w-[210px] max-[650px]:w-[110px]"
        />
      </div>

      <ul className="flex-1 hidden max-[1150px]:hidden md:flex items-center justify-center list-none">
        {["Home", "About", "Menu", "Chef", "Awards", "Location"].map((item) => (
          <li
            key={item}
            className="mx-4 text-white font-alt text-[16px] capitalize cursor-pointer hover:text-gray-300 transition-all"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="hidden max-[650px]:hidden md:flex items-center justify-end">
        <p
          className="mx-4 text-white font-alt text-[16px] capitalize cursor-default no-underline transition-all duration-75 ease-in-out hover:border-b hover:border-golden"
        >
          Log In / Register
        </p>
        <div className="w-[1px] h-[30px] bg-grey" />
        <p
          className="mx-4 text-white font-alt text-[16px] capitalize cursor-default no-underline transition-all duration-75 ease-in-out hover:border-b hover:border-golden"
        >
          Book Table
        </p>
      </div>

      <div className="flex md:hidden">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="cursor-pointer"
        />

        {toggleMenu && (
          <div className="fixed top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center z-50 transition-all duration-500 ease-in-out">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="absolute top-5 right-5 text-golden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="list-none text-center">
              {["Home", "About", "Menu", "Awards", "Contact"].map((item) => (
                <li
                  key={item}
                  className="m-8 text-golden text-3xl font-alt cursor-pointer hover:text-white transition-all"
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
