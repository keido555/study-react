import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSON PlaceholderのAPIを色々叩いてみる</p>
    </div>
  );
};

export default Index;
