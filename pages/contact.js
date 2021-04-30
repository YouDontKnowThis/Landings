import Head from "next/head";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";

function contact() {
  return (
    <>
      <Head>
        <title>Drone - login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <div className="overlay" />
    </>
  );
}

export default contact;
