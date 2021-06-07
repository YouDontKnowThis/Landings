import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import classes from "./small-card.module.scss";

interface SmallCardProps {
  imgUrl: string;
  position: string;
  width: number;
  height: number;
}

const SmallCard = ({ imgUrl, position, width, height }: SmallCardProps) => {
  const smallCardRef = useRef();
  useEffect(() => {
    gsap.to(smallCardRef.current, {
      y: 10,
      duration: 0.9,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div ref={smallCardRef} className={`${classes.small_card} ${position}`}>
      <Image src={imgUrl} width={width} height={height} />
    </div>
  );
};

export default SmallCard;
