import classes from "./button.module.scss";

function Button({ type, children }) {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
}

export default Button;
