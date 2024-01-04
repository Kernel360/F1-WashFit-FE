'use client';

import Channel from '@icons/Channel';
import Favorite from '@icons/Favorite';
import Home from '@icons/Home';
import Map from '@icons/Map';
import Profile from '@icons/Profile';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Text from '@shared/text/Text';
import deleteFirstWord from '@utils/deleteFirstWord';

import styles from './BottomNav.module.scss';

const cx = classNames.bind(styles);

function BottomNav() {
  const pathName = usePathname();
  const filteredPathName = deleteFirstWord(pathName);

  return (
    <nav className={cx('container')}>
      <ul>
        <li>
          <Link href="/map">
            <Map color={filteredPathName.startsWith('map') ? 'primary' : 'black'} />
            <Text typography="t7" fontWeight="200" color={filteredPathName.startsWith('map') ? 'primary' : 'black'}>지도</Text>
          </Link>
        </li>
        <li>
          <Link href="/favorite">
            <Favorite color={filteredPathName.startsWith('favorite') ? 'primary' : 'black'} />
            <Text typography="t7" fontWeight="200" color={filteredPathName.startsWith('favorite') ? 'primary' : 'black'}>즐겨찾기</Text>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Home color={filteredPathName === '' ? 'primary' : 'black'} />
            <Text typography="t7" fontWeight="200" color={filteredPathName === '' ? 'primary' : 'black'}>홈</Text>
          </Link>
        </li>
        <li>
          <Link href="/channel">
            <Channel color={filteredPathName.startsWith('channel') ? 'primary' : 'black'} />
            <Text typography="t7" fontWeight="200" color={filteredPathName.startsWith('channel') ? 'primary' : 'black'}>채널</Text>
          </Link>
        </li>
        <li>
          <Link href="/profile">
            <Profile color={filteredPathName.startsWith('profile') ? 'primary' : 'black'} />
            <Text typography="t7" fontWeight="200" color={filteredPathName.startsWith('profile') ? 'primary' : 'black'}>프로필</Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
