import Nav from "../../ui/nav/nav";
import Link from "../../ui/link/link";
import Image from "next/image";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container_md">
        <div className={classes.content}>
          <Nav>
            <Link href="/" text="Home" />
            <Link href="/" text="Pricing" />
            <Link href="/" text="About" />
          </Nav>
          <div className={classes.logo}>
            <Image src="/logo.png" alt="logo" width={68.2} height={56.57} />
          </div>
          <Nav>
            <Link href="/" text="Login" />
            <Link href="/" text="Contact Us" />
          </Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
