/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import Markers from '@/components/map/markers/Markers';
import KakaoMap from '@components/map/kakao-map/KakaoMap';
import useMarkers from '@remote/queries/map/useMarkers';
import BottomNav from '@shared/bottom-nav/BottomNav';
import SearchBar from '@shared/search-bar/SearchBar';

import styles from './page.module.scss';

const cx = classNames.bind(styles);
function MapPage() {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { data: carWashMarkers } = useMarkers({
    minX: 36.12,
    maxX: 36.88,
    minY: 127.1,
    maxY: 127.8,
    level: 2,
  });
  const [map, setMap] = useState<any>(null);

  return (
    <div className={cx('layout')}>
      <div className={cx('searchWrapper')}>
        <SearchBar isShadow />
      </div>
      <KakaoMap map={map} setMap={setMap} />
      <Markers map={map} carwashs={carWashMarkers!} />
      <BottomNav />
    </div>
  );
}

export default MapPage;
