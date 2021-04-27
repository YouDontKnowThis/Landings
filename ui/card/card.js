import classes from "./card.module.scss";
import Stars from "../../icons/stars";

function card() {
  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <Stars />
      </div>
      <h2>24/7</h2>
      <h6>Guide Support</h6>
    </div>
  );
}

export default card;
