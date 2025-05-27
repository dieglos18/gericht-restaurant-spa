import React from "react";
import { images, data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading.component";

interface Award {
  imgUrl: string;
  title: string;
  subtitle: string;
}

interface AwardCardProps {
  award: Award;
}

const AwardCard: React.FC<AwardCardProps> = ({
  award: { imgUrl, title, subtitle },
}) => (
  <div className="flex flex-1 min-w-[230px] sm:min-w-full lg:min-w-[230px] max-w-full m-4 items-start">
    <img src={imgUrl} alt="award" className="w-[50px] h-[50px]" />
    <div className="ml-4 flex flex-col">
      <p className="font-base font-semibold text-golden text-2xl tracking-widest">{title}</p>
      <p className="font-base text-white text-2xl">{subtitle}</p>
    </div>
  </div>
);

const Laurels: React.FC = () => (
  <div
    id="awards"
    className="relative flex flex-col lg:flex-row justify-center bg-fixed bg-cover bg-center px-6 md:px-20 py-20"
    style={{ backgroundImage: `url(${images.bg})` }}
  >
    <div className="flex-1 w-full px-4">
      <SubHeading title="Awards & recognition" />
      <h1 className="font-base font-medium text-golden text-[45px] sm:text-[64px] leading-[70px] sm:leading-[83.2px] capitalize mt-4">
        Our laurels
      </h1>

      <div className="flex flex-wrap justify-start items-center mt-12">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="flex-1 w-full flex justify-center mt-12 md:mt-0">
      <img
        src={images.laurels}
        alt="laurels"
        className="max-w-[90%] lg:max-w-[400px]"
      />
    </div>
  </div>
);

export default Laurels;
