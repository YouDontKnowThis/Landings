import React from "react";
import classes from "./nav.module.scss";

const Nav = ({ children }) => {
  return (
    <nav className={classes.nav}>
      <ul>{children}</ul>
    </nav>
  );
};

export default Nav;
