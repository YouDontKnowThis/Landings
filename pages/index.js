import Head from "next/head";
import Header from "../components/header/header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Drone - form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
