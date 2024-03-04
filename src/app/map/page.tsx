/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import CarWashBox from '@components/map/car-wash-box/CarWashBox';
import KakaoMap from '@components/map/kakao-map/KakaoMap';
import Markers from '@components/map/markers/Markers';
import { IMarkers } from '@remote/api/types/map';
import useMarkers from '@remote/queries/map/useMarkers';
import BottomNav from '@shared/bottom-nav/BottomNav';
import SearchBar from '@shared/search-bar/SearchBar';

import styles from './page.module.scss';

const cx = classNames.bind(styles);
function MapPage() {
  const [map, setMap] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data: carWashMarkers } = useMarkers({
    minX: 36.12,
    maxX: 36.88,
    minY: 127.1,
    maxY: 127.8,
    level: 2,
  });
  const [carWash, setCarWash] = useState<IMarkers | null>(null);

  return (
    <div className={cx('layout')}>
      <div className={cx('searchWrapper')}>
        {/* <SearchBar isShadow /> */}
      </div>
      <KakaoMap map={map} setMap={setMap} />
      <Markers map={map} carwashs={carWashMarkers!} setCarWash={setCarWash} />
      <CarWashBox carWash={carWash} />
      <BottomNav />
    </div>
  );
}

export default MapPage;
