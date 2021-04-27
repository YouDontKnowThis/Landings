import classes from "./button.module.scss";

function Button({ children, colors }) {
  return <button className={`${classes.btn} ${colors}`}>{children}</button>;
}

export default Button;
