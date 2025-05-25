import { images } from "../../constants";
import { p__cormorant } from "../../constants/styles";

interface SubHeadingProps {
  title: string;
}

const SubHeading = ({ title }: SubHeadingProps) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className={p__cormorant} style={{fontWeight: 500}}>
      {title}
    </p>
    <img src={images.spoon} alt="spoon" className="w-[45px] w-[1150px]:w-[80px]" />
  </div>
);

export default SubHeading;
