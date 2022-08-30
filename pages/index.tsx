/**
 *@nmae HOME
 */
import type { NextPage } from "next";
import { Nav, Seo } from "components/layout";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title={"HOME"} />
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  );
};
export default Home;
//*--------------------------------------------------*
const Content = styled.div`
  /* background-color: #ff0000; */
`;
