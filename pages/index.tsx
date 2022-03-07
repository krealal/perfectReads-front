import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>perfectReads</title>
        <meta
          name="description"
          content="app to manage all your favorite books"
        />
        <link rel="icon" href="/img/ico.png" />
      </Head>

      <main>
        <h1>PerfectReads</h1>
      </main>
    </div>
  );
};

export default Home;
