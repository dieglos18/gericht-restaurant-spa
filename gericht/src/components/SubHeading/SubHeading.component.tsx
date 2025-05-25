import { images } from "../../constants";

interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="font-base text-white font-medium tracking-[0.04em] capitalize leading-[29.9px] text-[23px] [font-feature-settings:'tnum_on','lnum_on']">
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="w-[45px]" />
  </div>
);

export default SubHeading;
