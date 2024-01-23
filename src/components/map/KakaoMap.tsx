/* eslint-disable @next/next/no-before-interactive-script-outside-document */

'use client';

import { useState } from 'react';
import {
  Map, MapMarker, CustomOverlayMap,
} from 'react-kakao-maps-sdk';

import Script from 'next/script';

interface IMarkerPosition {
  lat: number;
  lng: number;
}

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

function KakaoMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedMarkerPosition, setClickedMarkerPosition] = useState({ lat: 0, lng: 0 });

  const handleMarkerClick = (position:IMarkerPosition) => {
    setClickedMarkerPosition(position);
    setIsOpen(true);
  };

  // TODO: 주소를 받아서 좌표로 변환후 뿌려주기!
  // TODO: CustomOverlayMap 컴포넌트 UI

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.795841 }} style={{ width: '100vw', height: '100vh' }} level={3}>
        <MapMarker
          position={{ lat: 33.450701, lng: 126.795841 }}
          onClick={() => { return handleMarkerClick({ lat: 33.450701, lng: 126.795841 }); }}
        />
        <MapMarker
          position={{ lat: 33.450701, lng: 126.570667 }}
          onClick={() => { return handleMarkerClick({ lat: 33.450701, lng: 126.570667 }); }}
        />

        {isOpen && (
          <CustomOverlayMap position={clickedMarkerPosition}>
            <button onClick={() => { return setIsOpen(false); }}>
              닫기
            </button>
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
}

export default KakaoMap;
