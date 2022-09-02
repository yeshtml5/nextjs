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
const { kakao } = window;

export default function Map({ data }: Props) {
  //*--------------------------------------------------*

  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    } as any;
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <Content>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9c97e8aaa10542d168be1260e03d063d&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
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
