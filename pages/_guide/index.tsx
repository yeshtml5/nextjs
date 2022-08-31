/**
 * @name Guide
 * @description 가이드페이지
 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Seo } from "@components/layout";
import { debug } from "console";
import Image from "next/image";

type Props = {
  data: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
};
const API = "https://jsonplaceholder.typicode.com/photos";

export default function Guide({ data }: Props) {
  //*--------------------------------------------------*
  useEffect(() => {}, []);
  return (
    <Content>
      <Seo title="Guide" />
      <h1>Guide</h1>
      <div className="wrapper">
        {/* {JSON.stringify(data)} */}
        {data?.map((item, index) => {
          const { id, title, url, thumbnailUrl } = item;
          return (
            <div className="item" key={`${id}_${index}`}>
              <img src={thumbnailUrl} width={40} height={40} alt="" />
              <span>{title}</span>
            </div>
          );
        })}
      </div>
    </Content>
  );
}
// getServerSideProps
export async function getServerSideProps() {
  const res = await (await fetch(`${API}`)).json();
  return {
    props: {
      data: res.splice(0, 10),
    },
  };
}
//*--------------------------------------------------*
const Content = styled.div`
  padding: 0 20px;
  /* wrapper */
  .wrapper {
  }
  .item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #111;
    img {
      margin-right: 10px;
    }
  }
`;
