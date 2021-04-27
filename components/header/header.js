import Image from "next/image";
import Navbar from "../navbar/navbar";
import Search from "../search/search";
import classes from "./header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.left}>
            <div className={classes.logo}>
              <span>
                Travel<em>.</em>
              </span>
            </div>
            <Search />
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
