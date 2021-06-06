import Image from "next/image";
import PlayIcon from "../../../objects/icons/play";
import Rect_1 from "../../../objects/rectangles/rect_1";
import Rect_2 from "../../../objects/rectangles/rect_2";
import Rect_3 from "../../../objects/rectangles/rect_3";
import classes from "./illustration.module.scss";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <Image
        src="/images/hero/hero.png"
        width={629.51}
        height={680.25}
        layout="responsive"
      />
      <PlayIcon />
      <Rect_1 />
      <Rect_2 />
      <Rect_3 />
    </div>
  );
};

export default Illustration;
