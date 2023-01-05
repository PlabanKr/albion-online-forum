import Head from "next/head";
import { Layout } from "../components/Layout";
import { LoginComponent } from "../components/user/loginComponent";

export default function Login() {
  return (
    <>
      <Head>
        <title>Albion Online Wiki</title>
        <meta name="description" content="Albion Online Wiki - Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout haveSidebar={false}>
        <LoginComponent />
      </Layout>
    </>
  );
}
