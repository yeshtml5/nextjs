/**
 * @name Guide
 * @description 가이드페이지
 */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Seo } from "@components/layout";
import { debug } from "console";
import Script from "next/script";

export default function Map() {
  //*--------------------------------------------------*

  useEffect(() => {
    window.kakao.maps.load(() => {
      let container = document.getElementById("map");
      let options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      let map = new window.kakao.maps.Map(container, options);
      let markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    });
  }, []);

  return (
    <Content>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9c97e8aaa10542d168be1260e03d063d&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
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
