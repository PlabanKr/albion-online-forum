import Head from "next/head";
import { Layout } from "../components/Layout";
import { SignupComponent } from "../components/user/signupComponent";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Albion Online Wiki</title>
        <meta name="description" content="Albion Online Wiki - Signup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout haveSidebar={false}>
        <SignupComponent />
      </Layout>
    </>
  );
}
