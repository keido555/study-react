import Head from "next/head";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div className="text-center">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold">Next.jsで学ぶReact講座</h1>
      <p className="text-xl">JSON PlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
};

export default Index;
