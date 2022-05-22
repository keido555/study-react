import { useCallback } from "react";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";

export default function Home() {
  const foo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <button href="/about" onClick={handleClick}>
        ボタン
      </button>
      <Main page="index" />

      <Footer />
    </div>
  );
}
