import classes from "./hero.module.scss";
import Title from "./title/title";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="container_md">
        <div className={classes.content}>
          <div className={classes.main}>
            <Title />
          </div>
          <div className={classes.img}>{/* Illustration */}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
