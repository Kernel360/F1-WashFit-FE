import classNames from 'classnames/bind';

import BottomNav from '@shared/bottom-nav/BottomNav';
import KakaoMap from '@shared/map/KakaoMap';
import SearchBar from '@shared/search-bar/SearchBar';

import styles from './page.module.scss';

const cx = classNames.bind(styles);
function MapPage() {
  return (
    <div className={cx('layout')}>
      <div className={cx('searchWrapper')}>
        <SearchBar isShadow />
      </div>
      <KakaoMap />
      <BottomNav />
    </div>
  );
}

export default MapPage;
