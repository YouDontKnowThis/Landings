import Line from "../../icons/home/line";
import classes from "./underline.module.scss";

function Underline({ title, underTitle }) {
  return (
    <h1 className={`${classes.underline} bold`}>
      {title}
      <br />
      <span>
        {underTitle}
        <div className={classes.line}>
          <Line />
        </div>
      </span>
    </h1>
  );
}

export default Underline;
