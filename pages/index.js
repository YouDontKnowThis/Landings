import Head from "next/head";
import Header from "../components/header/header";
import Landing from "../components/landing/landing";
import Cities from "../components/cities/cities";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Landing />
      <Cities />
    </>
  );
}
