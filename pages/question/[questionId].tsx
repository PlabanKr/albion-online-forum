import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { QuestionComponent } from "../../components/question";

export default function Question() {
  const router = useRouter();
  const { questionId } = router.query;
  return (
    <>
      <Head>
        <title>Albion Online Wiki</title>
        <meta name="description" content="Albion Online Wiki Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <QuestionComponent qId={questionId} />
      </Layout>
    </>
  );
}
