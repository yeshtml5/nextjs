/**
 * @name useKakaoMap
 */

import styled from "styled-components";
import { useEffect } from "react";

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

function Map({ latitude, longitude }: Props) {
  // 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수입니다
  function setMapType(maptype) {
    var roadmapControl = document.getElementById("btnRoadmap");
    var skyviewControl = document.getElementById("btnSkyview");
    if (maptype === "roadmap") {
      kakaoContainer.setMapTypeId(kakaoMaps.MapTypeId.ROADMAP);
      roadmapControl.className = "selected_btn";
      skyviewControl.className = "btn";
    } else {
      kakaoContainer.setMapTypeId(kakaoMaps.MapTypeId.HYBRID);
      skyviewControl.className = "selected_btn";
      roadmapControl.className = "btn";
    }
  }

  // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomIn() {
    kakaoContainer.setLevel(kakaoContainer.getLevel() - 1);
  }

  // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
  function zoomOut() {
    kakaoContainer.setLevel(kakaoContainer.getLevel() + 1);
  }

  const onLoadKakaoMap = () => {
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
  }, [latitude, longitude]);

  return (
    <div>
      <MapContainer id="map" />
      <div className="custom_zoomcontrol radius_border">
        <span onClick={() => zoomIn()}>
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
            alt="확대"
          />
        </span>
        <span onClick={() => zoomOut()}>
          <img
            src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
            alt="축소"
          />
        </span>
      </div>
      <button
        onClick={() => {
          if (!kakaoMaps) return;
          var moveLatLon = new kakaoMaps.LatLng(33.05058, 126.2764942);
          kakaoContainer.panTo(moveLatLon);
        }}
      >
        test
      </button>
    </div>
  );
}

const MapContainer = styled.div`
  // aspect-ratio: 1;
  width: 100%;
  min-height: 300px;
`;

export default Map;
/************
 카카오지도
 https://apis.map.kakao.com/web/sample/basicMap/
  */
