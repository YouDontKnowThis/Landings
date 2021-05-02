import classes from "./illustration.module.scss";
import HomeAnimation from "../../../icons/animation/home-animation";

function IllustrationHome() {
  return (
    <div className={classes.illustration}>
      <HomeAnimation className={classes.icon} />
    </div>
  );
}

export default IllustrationHome;
