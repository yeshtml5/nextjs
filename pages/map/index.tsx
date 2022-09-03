/**
 * @name Guide
 * @description 가이드페이지
 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Seo } from "@components/layout";
import { debug } from "console";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("@components/map"), {
  suspense: true,
});

export default function Map() {
  //*--------------------------------------------------*

  useEffect(() => {}, []);

  return (
    <Content>
      <Seo title="Guide" />
      <h1>Guide</h1>
      <Suspense>
        <DynamicHeader fallback={"1"} />
      </Suspense>
      <div className="wrapper">{/* {JSON.stringify(data)} */}</div>
    </Content>
  );
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
