import classes from "./button.module.scss";

const Button = ({ label }: { label: string }) => {
  return <button className={classes.button}>{label}</button>;
};

export default Button;
