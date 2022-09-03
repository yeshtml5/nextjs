import styled from "styled-components";
import { useEffect } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}
declare global {
  interface Window {
    kakao: any;
  }
}
function Map({ latitude, longitude }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${"9c97e8aaa10542d168be1260e03d063d"}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return <MapContainer id="map" />;
}

const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;

export default Map;
// /**
//  * @name Guide
//  * @description 가이드페이지
//  */
// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Seo } from "@components/layout";
// import { debug } from "console";
// import Script from "next/script";

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }
// export default function Map() {
//   //*--------------------------------------------------*
//   useEffect(() => {
//     window.kakao.maps.load(() => {
//       let container = document.getElementById("map");
//       let options = {
//         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//         level: 3,
//       };
//       let map = new window.kakao.maps.Map(container, options);
//       let markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
//     });
//   }, []);

//   return (
//     <Content>
//       <Script
//         src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9c97e8aaa10542d168be1260e03d063d&libraries=services,clusterer&autoload=false"
//         strategy="beforeInteractive"
//       />
//       <div id="map" style={{ width: "500px", height: "400px" }}></div>
//       참고페이지
//       https://velog.io/@nyanji00/react-%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A7%B5-API-%EC%9D%B4%EC%9A%A9%ED%95%B4-%EC%A7%80%EB%8F%84-%EB%9D%84%EC%9A%B0%EA%B8%B0-Next.js-Typescript
//     </Content>
//   );
// }

// //*--------------------------------------------------*
// const Content = styled.div`
//   padding: 0 20px;
//   /* wrapper */
//   .wrapper {
//   }
//   .item {
//     display: flex;
//     align-items: center;
//     padding: 10px 0;
//     border-bottom: 1px solid #111;
//     img {
//       margin-right: 10px;
//     }
//   }
// `;
