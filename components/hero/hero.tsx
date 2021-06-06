import Button from "../../ui/button/button";
import SmallCard from "../../ui/small-card/small-card";
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
        <SmallCard
          imgUrl="/images/services/play-video.png"
          width={141.18}
          height={102.94}
          position={classes.s_card}
        />
      </div>
    </section>
  );
};

export default Hero;
