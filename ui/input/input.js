import classes from "./input.module.scss";

function Input({ type, label, placeholder, Icon }) {
  return (
    <div className={classes.control}>
      <label>{label}</label>
      <div className={classes.input}>
        <input type={type} placeholder={placeholder} />
        <div className={classes.icon}>{Icon && <Icon />}</div>
      </div>
    </div>
  );
}

export default Input;
