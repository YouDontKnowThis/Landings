import { useState, useEffect } from "react";
import ActiveLink from "../../ui/active-link/active-link";
import UserIcon from "../../icons/header/user";
import Bag from "../../icons/header/bag";
import classes from "./header.module.scss";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 90) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      });
    }
  }, []);

  return (
    <header
      className={`${classes.header} ${scroll ? "bg_fill" : "bg_gradient"}`}
    >
      <div className="container-md">
        <div className="flex jc">
          <nav className={`${classes.navbar} flex`}>
            <div className={classes.logo}>
              <h2>
                Drone<em>.</em>
              </h2>
            </div>
            <ul className="flex">
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="#">Pricing</ActiveLink>
              <ActiveLink href="#">Services</ActiveLink>
              <ActiveLink href="/contact">Contact</ActiveLink>
              <ActiveLink href="#">About</ActiveLink>
            </ul>
          </nav>
          <div className={`${classes.user} flex`}>
            <div>
              <Bag />
            </div>
            <div>
              <ActiveLink href="/contact">
                <UserIcon />
              </ActiveLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
