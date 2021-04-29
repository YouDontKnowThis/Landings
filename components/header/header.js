import ActiveLink from "../../ui/active-link/active-link";
import UserIcon from "../../icons/header/user";
import Bag from "../../icons/header/bag";
import classes from "./header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className="flex jc">
          <nav className={`${classes.navbar} flex`}>
            <div className={classes.logo}>
              <h2>Drone.</h2>
            </div>
            <ul className="flex">
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="#">Pricing</ActiveLink>
              <ActiveLink href="#">Services</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
            </ul>
          </nav>
          <div className={`${classes.user} flex`}>
            <div>
              <Bag />
            </div>
            <div>
              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
