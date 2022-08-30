/**
 *@nmae HOME
 */
import type { NextPage } from "next";
import { Nav, Seo } from "components/layout";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Content>
      <Seo title={"HOME"} />
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </Content>
  );
};
export default Home;
//*--------------------------------------------------*
const Content = styled.div`
  /* background-color: #ff0000; */
`;
