import classes from "./link.module.scss";
import LinkR from "next/link";

interface LinkProps {
  href: string;
  text: string;
}

const Link = ({ href, text }: LinkProps) => {
  return (
    <>
      {href && (
        <li className={classes.link}>
          <LinkR href={href}>
            <a>{text}</a>
          </LinkR>
        </li>
      )}
    </>
  );
};

export default Link;
