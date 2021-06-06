import Button from "../../ui/button/button";
import Image from "next/image";
import classes from "./hero.module.scss";
import Illustration from "./illustration/illustration";
import Title from "./title/title";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className="container_md">
        <div className={classes.content}>
          <div className={classes.main}>
            <Title />
            <Button label="Discover" />
          </div>
          <div className={classes.img}>
            <Illustration />
          </div>
        </div>
        <div className={classes.playIcon}>
          <Image src="/images/hero/play.png" width={124.8} height={122.03} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
