import SubHeading from "../../components/SubHeading/SubHeading.component";
import { images } from "../../constants";

const Chef = () => (
  <div
    id="chef"
    className="relative flex justify-center bg-fixed bg-cover bg-center px-6 py-20 lg:px-10 lg:py-32"
    style={{ backgroundImage: `url(${images.bg})` }}
  >
    <div className="flex flex-col lg:flex-row gap-20 items-center max-w-[1280px] w-full mx-auto">
      <div className="w-full flex justify-center items-center lg:w-1/2">
        <img src={images.chef} alt="chef" className="w-[400px]" />
      </div>

      <div className="w-full flex flex-col justify-start items-start text-white lg:w-1/2">
        <SubHeading title="Chef's Word" />
        <h1 className="font-base font-medium text-[45px] sm:text-[64px] leading-[70px] sm:leading-[83.2px] tracking-[0.04em] capitalize text-golden">
          What we believe in
        </h1>

        <div className="flex flex-col w-full mt-20">
          <div className="flex items-end mb-4">
            <img
              src={images.quote}
              alt="quote"
              className="w-[47px] h-[40px] mr-4 mb-4"
            />
            <p className="font-sans text-white text-base sm:text-[16px] sm:leading-[28px] tracking-[0.04em] capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            </p>
          </div>
          <p className="font-sans text-white text-base sm:text-[16px] sm:leading-[28px] tracking-[0.04em] capitalize">
            Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
            Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
            lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>

        <div className="w-full mt-12 flex flex-row items-center">
          <div>
            <p className="text-golden font-base text-2xl sm:text-[32px] leading-[41px] font-light tracking-[0.04em] capitalize">
              Kevin Luo
            </p>
            <p className="font-sans text-white text-sm sm:text-[16px] leading-[28px] tracking-[0.04em] capitalize">
              Chef & Founder
            </p>
          </div>
          <div className="ml-16 sm:ml-32">
            <img src={images.sign} alt="sign" className="w-[52%] sm:w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
