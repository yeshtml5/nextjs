/**
 *@nmae HOME
 */
import type { NextPage } from "next";
import { Nav, Seo } from "components/layout";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import { dev_front } from "public/lottie";

const Home: NextPage = () => {
  return (
    <Content>
      <Seo title={"HOME"} />
      <h1>Welcome to YESHTML5 / Next.js!</h1>
      <Lottie
        loop
        animationData={dev_front}
        play
        style={{ width: 300, height: 300 }}
      />
    </Content>
  );
};
export default Home;
//*--------------------------------------------------*
const Content = styled.div`
  padding: 0 20px;
  /* background-color: #ff0000; */
`;
