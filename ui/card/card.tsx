import Image from "next/image";
import classes from "./card.module.scss";

interface CardProps {
  label: string;
  imgUrl: string;
}

const Card = ({ label, imgUrl }: CardProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <Image src={imgUrl} alt={label} width={112.16} height={112.16} />
      </div>
      <h3>{label}</h3>
    </div>
  );
};

export default Card;
