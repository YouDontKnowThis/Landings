import classes from "./main.module.scss";
import Underline from "../../../ui/underline/underline";
import { ButtonIcon } from "../../../ui/button/button";
import DronSmall from "../../../icons/home/dron-small";

function Main() {
  return (
    <div className={classes.main}>
      <Underline title="Let's fly" underTitle="Higher" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
        cras urna id viverra.
      </p>
      <ButtonIcon text="Pick your drone" Icon={DronSmall} />
    </div>
  );
}

export default Main;
