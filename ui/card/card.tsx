import { useRef, useEffect } from "react";
import Image from "next/image";
import classes from "./card.module.scss";
import gsap, { Power3 } from "gsap";

interface CardProps {
  label: string;
  imgUrl: string;
}

const Card = ({ label, imgUrl }: CardProps) => {
  const iconRef = useRef();

  useEffect(() => {
    console.log(iconRef.current);
    gsap.to(iconRef.current, {
      scale: 1.08,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <div className={classes.card}>
      <div className={classes.icon}>
        <div ref={iconRef}>
          <Image src={imgUrl} alt={label} width={112.16} height={112.16} />
        </div>
      </div>
      <h3>{label}</h3>
    </div>
  );
};

export default Card;
