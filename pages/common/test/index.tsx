import type { NextPage } from "next";
import Head from "next/head";
import { Seo } from "components/layout";

const Test: NextPage = () => {
  return (
    <div>
      <Seo title={"TEST"} />
    </div>
  );
};

export default Test;

Test.getInitialProps = () => {
  return { title: "TES111T" };
};
