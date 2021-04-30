import Head from "next/head";
import Header from "../components/header/header";
import Home from "../components/home/home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Drone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </>
  );
}
