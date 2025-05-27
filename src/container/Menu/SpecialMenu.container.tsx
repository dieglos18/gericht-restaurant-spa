import MenuItem from "../../components/MenuItem/MenuItem.component";
import SubHeading from "../../components/SubHeading/SubHeading.component";
import { images, data } from "../../constants";

const SpecialMenu = () => (
  <div className="flex flex-col bg-background justify-center items-center py-16 px-6 sm:px-12 lg:px-24">
    <div className="mb-8 flex flex-col items-center justify-center">
      <SubHeading title="Menu that fits you palatte" />
      <h1
        className="font-base text-golden text-[45px] leading-[70px] tracking-[0.04em] capitalize
        sm:text-[64px] sm:leading-[83.2px] 
        2xl:text-[150px] 2xl:leading-[210px]"
      >
        Today's Special
      </h1>
    </div>

    <div className="w-full my-8 flex justify-center items-start flex-col lg:flex-row lg:items-start">
      <div className="flex-1 w-full flex flex-col items-center">
        <p
          className="font-base font-medium text-white text-[35px] leading-[48.5px] tracking-[0.04em]
          sm:text-[45px] sm:leading-[58.5px]"
        >
          Wine & Beer
        </p>
        <div className="flex flex-col w-full my-8">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="w-[70%] my-12 mx-auto lg:my-0 lg:mx-8 lg:w-[410px] 2xl:w-[650px]">
        <img
          src={images.menu}
          alt="menu img"
          className="flex w-full h-auto xl:h-[620px]"
        />
      </div>

      <div className="flex-1 w-full flex flex-col items-center">
        <p
          className="font-base font-medium text-white text-[35px] leading-[48.5px] tracking-[0.04em]
          sm:text-[45px] sm:leading-[58.5px]"
        >
          Cocktails
        </p>
        <div className="flex flex-col w-full my-8">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div className="mt-4">
      <button
        type="button"
        className="bg-golden font-base text-background px-8 py-3 rounded-lg font-semibold transition duration-200 hover:opacity-90"
      >
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
