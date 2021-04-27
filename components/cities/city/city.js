import Image from "next/image";
import classes from "./city.module.scss";

function City({ src, name }) {
  return (
    <div className={classes.city}>
      <Image src={src} width={300} height={500} layout="responsive" />
      <div className={classes.label}>
        <span>{name}</span>
      </div>
      <div className={classes.overlay} />
    </div>
  );
}

export default City;
