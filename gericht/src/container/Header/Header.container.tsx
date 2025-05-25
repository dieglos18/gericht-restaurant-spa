import SubHeading from "../../components/SubHeading/SubHeading.component";
import { images } from "../../constants";

const Header = () => (
  <div
    className="bg-background flex min-h-screen py-16 px-24 flex-col max-xl:flex-col xl:flex-row items-center justify-between"
    id="home"
  >
    <div className="flex-1 w-full flex flex-col justify-center items-start">
      <SubHeading title="Chase the new flavour" />

      <h1
        className="font-base text-golden tracking-[0.04em] uppercase text-[90px] leading-[117px] 
      2xl:text-[150px] 2xl:leading-[210px]"
      >
        The Key to Fine Dining
      </h1>

      <p
        className="mx-4 text-white font-alt text-[16px] capitalize transition-all hover:text-gray-300 
      tracking-[0.04em] leading-[28px] font-normal 
      2xl:text-[30px] 2xl:leading-[50px]"
        style={{ margin: "2rem 0" }}
      >
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>

      <button
        type="button"
        className="text-background bg-golden font-base font-bold tracking-[0.04em] leading-7 text-[16px] 
      px-6 py-2 rounded-md cursor-pointer 
      2xl:text-[37px] 2xl:leading-[67px]"
      >
        Explore Menu
      </button>
    </div>

    <div
      className="flex-1 w-full flex justify-center items-center ml-8 
    max-xl:mt-20 max-xl:ml-0"
    >
      <img
        src={images.welcome}
        alt="header img"
        className="w-[80%] max-xl:w-full"
      />
    </div>
  </div>
);

export default Header;
