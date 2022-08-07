import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Nav, Seo } from "components/layout";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title={"HOME"} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
