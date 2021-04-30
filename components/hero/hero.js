import Illustration from "./illustration/illustration";
import Form from "./form/form";
import classes from "./hero.module.scss";

function Hero() {
  return (
    <div className={classes.hero}>
      <div className="container-lg">
        <div className={classes.content}>
          <Illustration />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Hero;
