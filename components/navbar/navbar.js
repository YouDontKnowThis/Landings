import classes from "./navbar.module.scss";
import Button from "../../ui/button/button";

const links = ["Reviews", "Destinations", "Pricing", "About"];

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        {links.map((link, index) => (
          <li key={`link--${index}`}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <Button colors={classes.btn}>Contact Us</Button>
    </nav>
  );
}

export default Navbar;
