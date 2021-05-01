import { useState, useEffect } from "react";
import classes from "./toggle.module.scss";

function Toggle() {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("state", toggle);
    }
    setToggle(!toggle);
  };

  return (
    <div className={classes.wrapper} onClick={toggleState}>
      <div className={toggle ? classes.toggle_a : classes.toggle} />
      <label>Remember me</label>
    </div>
  );
}

export default Toggle;
