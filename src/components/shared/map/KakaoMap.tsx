/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';

import Script from 'next/script';

import CurrentLocationButton from './CurrentLocationButton';

declare global {
  interface Window {
    kakao: any
  }
}
const location = { lat: 37.514417066172385, lng: 127.06132898292525 };

interface Location {
  lat: number;
  lng: number;
}

function KakaoMap() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [map, setMap] = useState<any>(null);
  const [currentLocation, setCurrentLocation] = useState<Location>(location);

  if (navigator.geolocation) {
    // GeoLocation을 이용해서 현재 위치 가져오기
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation((prev) => {
        return {
          ...prev,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    });
  }

  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(location.lat, location.lng),
        level: 3,
      };
      const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);
    });
  };

  const displayMarker = (locPosition: Location) => {
    const marker = new window.kakao.maps.Marker({
      map,
      position: locPosition,
    });

    // 지도 중심좌표를 현 위치로 변경
    map.setCenter(locPosition);
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성
      const locPosition = new window.kakao.maps.LatLng(currentLocation.lat, currentLocation.lng);
      displayMarker(locPosition);
    } else {
      // GeoLocation을 사용할 수 없을 때 마커 표시 위치 설정
      const locPosition = new window.kakao.maps.LatLng(location.lat, location.lng);
      displayMarker(locPosition);
    }
  };
  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" style={{ width: '100vw', height: '100vh' }} />
      <CurrentLocationButton onClick={handleCurrentLocationClick} />
    </div>
  );
}

export default KakaoMap;
