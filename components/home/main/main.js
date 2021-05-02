import classes from "./main.module.scss";
import Underline from "../../../ui/underline/underline";
import { ButtonIcon } from "../../../ui/button/button";
import DronSmall from "../../../icons/home/dron-small";
import ArrowDown from "../../../icons/home/arrow-down";

function Main() {
  return (
    <div className={classes.main}>
      <Underline title="Let's fly" underTitle="Higher" />
      <p>
        DRONE. camera drones contain the best drone technology for every type of
        user and shooting scenario.
      </p>
      <ButtonIcon text="Pick your drone" Icon={DronSmall} />
      <div className={classes.arrow}>
        <ArrowDown />
      </div>
    </div>
  );
}

export default Main;
