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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        cras urna id viverra.
      </p>
      <ButtonIcon text="Pick your drone" Icon={DronSmall} />
      <div className={classes.arrow}>
        <ArrowDown />
      </div>
    </div>
  );
}

export default Main;
