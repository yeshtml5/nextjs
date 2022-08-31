import type { NextPage } from "next";
import Head from "next/head";
import { Seo } from "components/layout";
import { useEffect, useState } from "react";

const Test: NextPage = () => {
  const API = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState();

  useEffect(() => {}, []);
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
