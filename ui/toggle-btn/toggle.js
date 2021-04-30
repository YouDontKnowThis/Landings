import { useState } from "react";
import classes from "./toggle.module.scss";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={classes.wrapper} onClick={() => setToggle(!toggle)}>
      <div className={toggle ? classes.toggle_a : classes.toggle} />
      <label>Remember me</label>
    </div>
  );
}

export default Toggle;
