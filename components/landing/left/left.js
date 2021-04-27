// import Image from "next/image";
import classes from "./left.module.scss";
import Bag from "../../../icons/bag";
import Localisation from "../../../icons/localisation";
import Card from "../../../ui/card/card";

function Left() {
  return (
    <div className={classes.wrapper}>
      <img className={classes.i1} src="/images/accessoirs/loc.png" />
      <img className={classes.i2} src="/images/accessoirs/compass.png" />
      <img className={classes.i3} src="/images/people/girl.svg" />
      <img className={classes.i4} src="/images/accessoirs/ellipse.svg" />
      <img className={classes.i5} src="/images/accessoirs/circle.svg" />
      <Bag className={classes.v1} />
      <Localisation className={classes.v2} />
      <Card />
    </div>
  );
}

export default Left;
