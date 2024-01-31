/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useEffect, useState } from 'react';

import Script from 'next/script';

import CurrentLocationButton from './CurrentLocationButton';

declare global {
  interface Window {
    kakao: any
  }
}
const location = { lat: 37.514417066172385, lng: 127.06132898292525 };

interface ILocation {
  lat: number;
  lng: number;
}

function KakaoMap() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [map, setMap] = useState<any>(null);

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

  const displayMarker = (locPosition: ILocation) => {
    const marker = new window.kakao.maps.Marker({
      map,
      position: locPosition,
    });

    // 지도 중심좌표를 현 위치로 변경
    map.setCenter(locPosition);
  };

  const handleCurrentLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // eslint-disable-next-line max-len
          const locPosition = new window.kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
          displayMarker(locPosition);
        },
        (error) => {
          console.error('현재 위치를 가져오는 중 오류 발생', error);
        },
      );
    } else {
      console.error('GeoLocation을 사용할 수 없음');
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
