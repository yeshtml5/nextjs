/**
 * @name useKakaoMap
 * @description 카카오지도
 */
import { useCallback, useState, useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}
type Props = {
  latitude: number;
  longitude: number;
};
let kakaoMaps: any;
let kakaoContainer: any;
export const useKakaoMap = (initialState: Props): any => {
  // element

  const { latitude, longitude } = initialState;

  const onLoadKakaoMap = () => {
    console.log("dskfjlsd");
    window.kakao.maps.load(() => {
      kakaoMaps = window.kakao.maps;
      const container = document.getElementById("map");
      const options = {
        center: new kakaoMaps.LatLng(latitude, longitude),
        level: 3, // 지도의 확대 레벨
      };
      kakaoContainer = new kakaoMaps.Map(container, options);
      const markerPosition = new kakaoMaps.LatLng(latitude, longitude);
      const marker = new kakaoMaps.Marker({
        position: markerPosition,
      });
      marker.setMap(kakaoContainer);
    });
  };
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${"9c97e8aaa10542d168be1260e03d063d"}&autoload=false`;
    document.head.appendChild(mapScript);
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  const element = () => {
    return <div id="map" style={{ width: 400, height: 300 }}></div>;
  };

  return { kakaoMaps, kakaoContainer, element };
};
/********************************************************
[사용법]

import {useObject} from '@app/lib/hooks'


*********************************************************/
