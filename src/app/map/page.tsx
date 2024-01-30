import classNames from 'classnames/bind';

import KakaoMap from '@components/map/KakaoMap';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Header from '@shared/header/Header';
import SearchBar from '@shared/search-bar/SearchBar';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function MapPage() {
  return (
    <div className={cx('mainLayout')}>
      <Header isTransparent isDisplayLogo={false} />
      <div className={cx('searchWrapper')}>
        <SearchBar isWhite />
      </div>
      <KakaoMap />
      <BottomNav />
    </div>
  );
}

export default MapPage;
