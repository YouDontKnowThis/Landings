import Head from "next/head";
import Header from "../components/header/header";
import Home from "../components/home/home";
import BackgroundHome from "../icons/home/background";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
      <BackgroundHome />
      <img
        className="desk_only"
        src="/bg.svg"
        style={{
          position: "absolute",
          top: "500px",
          left: "50px",
          zIndex: "-2",
          width: "60%",
          objectFit: "contain",
        }}
      />
    </>
  );
}
