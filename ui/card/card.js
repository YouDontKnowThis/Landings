import classes from "./card.module.scss";
import Stars from "../../icons/stars";
import { useSpring, animated as anim } from "react-spring";

function card() {
  const v2 = useSpring({
    bounce: true,
    loop: { reverse: true },
    from: { scale: 1, translateY: 0 },
    to: { scale: 1.1, translateY: 20 },
    config: { duration: 1600 },
  });
  return (
    <anim.div style={v2} className={classes.card}>
      <div className={classes.icon}>
        <Stars />
      </div>
      <h2>24/7</h2>
      <h6>Guide Support</h6>
    </anim.div>
  );
}

export default card;
