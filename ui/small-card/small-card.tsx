import Image from "next/image";
import classes from "./small-card.module.css";

interface SmallCardProps {
  imgUrl: string;
}

const SmallCard = ({ imgUrl }: SmallCardProps) => {
  return (
    <div className={classes.small_card}>
      <Image src={imgUrl} width={70.59} height={70.59} />
    </div>
  );
};

export default SmallCard;
