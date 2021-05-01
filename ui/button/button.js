import classes from "./button.module.scss";

export function Button({ type, children }) {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
}

export function ButtonIcon({ text, Icon }) {
  return (
    <button className={classes.buttonIcon}>
      <span>{text}</span>
      <div className={classes.icon}>{Icon && <Icon />}</div>
    </button>
  );
}
