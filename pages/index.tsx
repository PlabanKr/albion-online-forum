import Head from "next/head";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Albion Online Wiki</title>
        <meta name="description" content="Albion Online Wiki Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p className="text-center text-5xl font-bold">
          Welcome to Albion Online Forum
        </p>
        <p className="text-center text-lg pt-6">
          A community driven forum for Albion Online
        </p>
        <div className="flex place-content-center p-10">
          <button
            className="text-white bg-orange-700 hover:bg-orange-500 py-4 px-8 font-semibold"
            onClick={() => window.open("https://albiononline.com/en/home")}
          >
            Play Albion Online for free.
          </button>
        </div>
      </Layout>
    </>
  );
}
