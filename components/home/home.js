import { useState } from "react";
import IllustrationHome from "./illustration/illustration";
import Modal from "../../ui/modal/modal";
import Main from "./main/main";
import Video from "../video/video";
import ReactPlayer from "react-player/youtube";
import About from "./about/about";
import classes from "./home.module.scss";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mg-t-lg">
        <div className="container-md">
          <div className={classes.home}>
            <Main />
            <IllustrationHome />
          </div>
          <Video setShowModal={setShowModal} />
        </div>
        <About />
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <ReactPlayer url="https://www.youtube.com/watch?v=IM6od1FTPPE" />
          </Modal>
        )}
      </div>
    </>
  );
}

export default Home;
