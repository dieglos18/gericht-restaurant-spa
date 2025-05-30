import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading.component";
import { p__opensans } from "../../constants/styles";

const FindUs: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-between items-center bg-cover bg-center bg-fixed px-6 py-16 lg:px-24"
      style={{ backgroundImage: `url(${images.bg})` }}
    >
      <div className="flex-1 w-full flex flex-col justify-start items-start text-left px-16 lg:px-0">
        <SubHeading title="contact" />
        <h1 className="text-[45px] sm:text-[64px] lg:text-[80px] leading-tight font-medium font-base text-[#DCCA87] mt-4 mb-12 capitalize tracking-wide">
          Find Us
        </h1>
        <div>
          <p className={p__opensans}>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p className="text-[#DCCA87] text-[23px] sm:text-[26px] font-medium font-base mt-8 mb-4 capitalize tracking-wide">
            Opening Hours
          </p>
          <p className={p__opensans}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className={p__opensans}>Sat - Sun: 10:00 am - 03:00 am</p>
          <button
            type="button"
            className="mt-8 bg-golden text-background px-6 py-3 rounded-md text-base font-semibold font-base"
          >
            Visit Us
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0 lg:ml-8">
        <img
          src={images.findus}
          alt="findus"
          className="w-4/5 max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default FindUs;
