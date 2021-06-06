import Image from "next/image";
import classes from "./small-card.module.scss";

interface SmallCardProps {
  imgUrl: string;
  position: string;
  width: number;
  height: number;
}

const SmallCard = ({ imgUrl, position, width, height }: SmallCardProps) => {
  return (
    <div className={`${classes.small_card} ${position}`}>
      <Image src={imgUrl} width={width} height={height} />
    </div>
  );
};

export default SmallCard;
