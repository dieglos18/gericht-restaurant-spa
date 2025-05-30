import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      id="login"
      className="flex flex-col items-start bg-background pt-0 px-8 py-16 sm:px-16 md:px-24 lg:px-32"
    >
      <div className="w-full flex flex-col lg:flex-row justify-around items-start mt-20 gap-10">
        <div className="flex-1 text-center space-y-4">
          <img
            src={images.gericht}
            alt="footer_logo"
            className="w-[210px] mx-auto mb-3"
          />
          <p className="text-white text-base capitalize px-4 md:px-8">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="w-[45px] mx-auto mt-4"
          />
          <div className="flex justify-center mt-2 space-x-4 text-white text-2xl">
            <FiFacebook className="hover:text-golden cursor-pointer" />
            <FiTwitter className="hover:text-golden cursor-pointer" />
            <FiInstagram className="hover:text-golden cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-12 w-full flex flex-col items-center justify-center text-center gap-2">
        <p className="text-white text-base capitalize">
          2025 Gericht. All Rights reserved.
        </p>
        <p className="text-white text-base">Made by Diego Losada</p>
        <a
          href="https://www.linkedin.com/in/dieglos18/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:underline"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
