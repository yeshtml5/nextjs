/**
 * @name Guide
 * @description 가이드페이지
 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Seo } from "@components/layout";
import { debug } from "console";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PhotoDetail() {
  const router = useRouter();
  const { url, title, thumbnailUrl } = router.query;
  //*--------------------------------------------------*
  useEffect(() => {}, []);
  return (
    <Content>
      <Seo title="PhotoDetail" />
      <h1>상세페이지</h1>
      <div className="wrapper">{JSON.stringify(router.query, null, 1)}</div>
      <a href={`${url} `}>
        <h2>{title}</h2>
        <img src={`${thumbnailUrl}`} />
      </a>
    </Content>
  );
}

//*--------------------------------------------------*
const Content = styled.div`
  padding: 0 20px;
  /* wrapper */
  .wrapper {
  }
`;
