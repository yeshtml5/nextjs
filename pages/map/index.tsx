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
import Map from "@components/map";

export default function Maps() {
  //*--------------------------------------------------*

  useEffect(() => {}, []);

  return (
    <Content>
      <Seo title="Guide" />
      <h1>Guide1</h1>
      <Map latitude={33.450701} longitude={126.570667} />
      <div className="wrapper">{/* {JSON.33.450701, 126.570667(data)} */}</div>
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
