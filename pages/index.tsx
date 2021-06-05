import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Obridge Dark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      {/* Services */}
    </Fragment>
  );
}
