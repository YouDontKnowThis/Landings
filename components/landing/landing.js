import classes from "./landing.module.scss";
import Left from "./left/left";
import RightLight from "../../icons/right-light";
import RightBold from "../../icons/right-bold";
import Cloud from "../../icons/cloud";
import Plan from "../../icons/plan";
import Button from "../../ui/button/button";

function landing() {
  return (
    <div className={classes.landing}>
      <div className={classes.left}>
        <Left />
      </div>
      <div className={classes.right}>
        <div className={classes.info}>
          <h1>
            Explore
            <br />
            The Beauty
            <br />
            Of the World.
          </h1>
          <p>
            To get the base of your adventure you just need to leave and go
            where you like. We are waiting for you.
          </p>
          <div className={classes.buttons}>
            <Button colors={classes.btn}>
              <span>Plan a Trip</span> <RightLight />
            </Button>
            <div className={classes.video}>
              <img
                className={classes.avatar}
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHG8lFlI78f0g/profile-displayphoto-shrink_800_800/0/1619117137265?e=1625097600&v=beta&t=fJ_908dGWcwjErtvEFY5SMxjJjRL-iekH_2uhieLXGA"
                alt=""
              />
              <RightBold className={classes.icon} />
              <h6>watch the video</h6>
            </div>
          </div>
        </div>
        <img
          className={classes.map}
          src="/images/accessoirs/map.png"
          alt="map"
        />
        <Cloud />
        <Plan />
      </div>
    </div>
  );
}

export default landing;
