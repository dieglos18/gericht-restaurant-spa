import { p__cormorant, p__opensans } from "../../constants/styles";

interface MenuItemProps {
  title: string;
  price: string;
  tags: string;
}

const MenuItem = ({ title, price, tags }: MenuItemProps) => (
  <div className="w-full my-4 mx-0 flex flex-col">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p
          className={p__cormorant}
          style={{ color: "#DCCA87" }}
        >
          {title}
        </p>
      </div>

      <div className="w-[90px] h-[1px] bg-golden my-0 mx-4" />

      <div className="flex justify-end items-end">
        <p className={`${p__cormorant} font-light`}>
          {price}
        </p>
      </div>
    </div>

    <div className="w-full mt-[0.2rem]">
      <p
        className={p__opensans}
        style={{ color: "#AAA" }}
      >
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
