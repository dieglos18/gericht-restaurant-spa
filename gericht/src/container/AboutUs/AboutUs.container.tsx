import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="relative bg-fixed bg-cover bg-center flex justify-center items-center px-6 py-20 lg:px-20 lg:py-32"
    id="about"
    style={{ backgroundImage: `url(${images.bg})` }}
  >
    <div className="absolute inset-0 flex justify-center items-center">
      <img
        src={images.G}
        alt="g letter"
        className="w-[80%] max-w-[391px] h-[320px] lg:h-[415px] object-contain z-0"
      />
    </div>

    <div className="w-full flex flex-col lg:flex-row justify-center items-center z-10">
      <div className="flex-1 flex flex-col items-end text-right px-4">
        <h1 className="text-[55px] lg:text-[80px] leading-[83.2px] tracking-[0.04em] capitalize text-golden font-base">
          About Us
        </h1>
        <img src={images.spoon} alt="about_spoon" className="w-[45px] my-4" />
        <p className="text-gray-300 text-[16px] leading-[28px] my-8 font-alt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button
          type="button"
          className="bg-golden text-background font-semibold text-[16px] px-6 py-2 rounded-md font-base"
        >
          Know More
        </button>
      </div>

      <div className="my-16 lg:my-0 lg:mx-16 flex justify-center items-center">
        <img
          src={images.knife}
          alt="about_knife"
          className="h-[610px] max-h-[610px] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col items-start text-left px-4">
        <h1 className="text-[55px] lg:text-[80px] leading-[83.2px] tracking-[0.04em] capitalize text-golden font-base">
          Our History
        </h1>
        <img src={images.spoon} alt="about_spoon" className="w-[45px] my-4" />
        <p className="text-gray-300 text-[16px] leading-[28px] my-8 font-opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button
          type="button"
          className="bg-golden text-background font-semibold text-[16px] px-6 py-2 rounded-md font-base"
        >
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
