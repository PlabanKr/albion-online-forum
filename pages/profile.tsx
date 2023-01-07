import Head from "next/head";
import { Layout } from "../components/Layout";
import { ProfileComponent } from "../components/user/profileComponent";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Albion Online Wiki</title>
        <meta name="description" content="Albion Online Wiki - Profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout haveSidebar={false}>
        <ProfileComponent />
      </Layout>
    </>
  );
}
