import { useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../../ui/button/button";
import Image from "next/image";
import classes from "./hero.module.scss";
import Illustration from "./illustration/illustration";
import Title from "./title/title";

const Hero = () => {
  const smallCardRef = useRef();
  useEffect(() => {
    gsap.to(smallCardRef.current, {
      y: -10,
      duration: 0.9,
      ease: "linear",
      repeat: -1,
      yoyo: true,
      delay: 0.4,
    });
  }, []);
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
        <div ref={smallCardRef} className={classes.playIcon}>
          <Image src="/images/hero/play.png" width={124.8} height={122.03} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
