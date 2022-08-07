import type { NextPage } from "next";
import Head from "next/head";
import { Seo } from "../../../components/layout";

const Test: NextPage = () => {
  return (
    <Head>
      <Seo title={"TEST"} />
      <div>dfsdf</div>
    </Head>
  );
};

export default Test;
