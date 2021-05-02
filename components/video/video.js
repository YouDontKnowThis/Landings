import Image from "next/image";
import classes from "./video.module.scss";
import DroneIcon from "../../icons/video/drone-icon";
import PlayIcon from "../../icons/video/play";

function Video({ setShowModal }) {
  return (
    <div className={classes.video}>
      <div className={classes.thubmail}>
        <Image src="/thubmail.svg" alt="thubmail" width={195} height={149} />
        <PlayIcon className={classes.play} onClick={() => setShowModal(true)} />
      </div>
      <div className={classes.text}>
        <DroneIcon />
        <h3>Camera Drone Advantages</h3>
        <p>To get the adventages of your drone you must see the video.</p>
      </div>
    </div>
  );
}

export default Video;
