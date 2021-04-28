import classes from "./left.module.scss";
import Bag from "../../../icons/bag";
import Localisation from "../../../icons/localisation";
import Card from "../../../ui/card/card";
import { useSpring, animated as anim, config } from "react-spring";

function Left() {
  const i1 = useSpring({
    bounce: true,
    loop: { reverse: true },
    from: { translateY: 0 },
    to: { translateY: -70 },
    delay: 500,
    config: config.wobbly,
  });

  const i2 = useSpring({
    loop: true,
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 2500 },
  });

  return (
    <div className={classes.wrapper}>
      <anim.img
        style={i1}
        className={classes.i1}
        src="/images/accessoirs/loc.png"
      />
      <anim.img
        className={classes.i2}
        style={i2}
        src="/images/accessoirs/compass.png"
      />
      <img className={classes.i3} src="/images/people/girl.png" />
      <Bag className={classes.v1} />
      <Localisation className={classes.v2} />
      <Card />
    </div>
  );
}

export default Left;
