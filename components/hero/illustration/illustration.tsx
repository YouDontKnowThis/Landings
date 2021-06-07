import { useRef, useEffect } from "react";
import Image from "next/image";
import PlayIcon from "../../../objects/icons/play";
import Rect_1 from "../../../objects/rectangles/rect_1";
import Rect_2 from "../../../objects/rectangles/rect_2";
import Rect_3 from "../../../objects/rectangles/rect_3";
import classes from "./illustration.module.scss";
import gsap from "gsap";

const Illustration = () => {
  const rect1Ref = useRef();
  const rect2Ref = useRef();
  const rect3Ref = useRef();

  useEffect(() => {
    console.log(rect1Ref.current);
    gsap.to(rect1Ref.current, {
      rotate: 10,
      left: "10%",
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(rect2Ref.current, {
      rotate: 0,
      left: "4%",
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
    gsap.to(rect3Ref.current, {
      rotate: -16,
      left: "-5%",
      opacity: 1,
      duration: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <div className={classes.illustration}>
      <Image
        src="/images/hero/hero.png"
        width={629.51}
        height={680.25}
        layout="responsive"
      />
      <PlayIcon />
      <Rect_1 rectRef={rect1Ref} />
      <Rect_2 rectRef={rect2Ref} />
      <Rect_3 rectRef={rect3Ref} />
    </div>
  );
};

export default Illustration;
