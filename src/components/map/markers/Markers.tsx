/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect } from 'react';

import { MarkersType } from '@remote/api/types/map';

interface MarkerProps {
  map: any
  carwashs: MarkersType
}

declare global {
  interface Window {
    kakao: any
  }
}

function Markers({ map, carwashs }: MarkerProps) {
  const loadKakoMarkers = useCallback(() => {
    if (map) {
      // 식당 데이터 마커 띄우기
      carwashs?.value.map((carwash) => {
        const imageSrc = '/assets/marker.png';
        const imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption,
        );

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          carwash.latitude,
          carwash.longitude,
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    }
  }, [map, carwashs]);

  useEffect(() => {
    loadKakoMarkers();
  }, [loadKakoMarkers, map]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

export default Markers;
