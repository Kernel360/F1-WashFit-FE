/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';

import Script from 'next/script';

declare global {
  interface Window {
    kakao: any
  }
}

function KakaoMap() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [_, setMap] = useState(null);
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map');
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.514417066172385, 127.06132898292525),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" style={{ width: '100vw', height: '100vh' }} />
    </>
  );
}

export default KakaoMap;
