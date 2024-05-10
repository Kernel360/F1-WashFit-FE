'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Board from '@/components/icons/Board';
import FilledBoard from '@/components/icons/FilledBoard';
import FilledChannel from '@/components/icons/FilledChannel';
import Channel from '@components/icons/Channel';
import Favorite from '@components/icons/Favorite';
import FilledFavorite from '@components/icons/FilledFavorite';
import FilledHome from '@components/icons/FilledHome';
import Home from '@components/icons/Home';
import Map from '@components/icons/Map';
import Profile from '@components/icons/Profile';
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
            <Map color={filteredPathName.startsWith('map') ? 'primary500' : 'black'} />
            <Text
              typography="t7"
              fontWeight="200"
              color={filteredPathName.startsWith('map') ? 'primary500' : 'black'}
            >
              지도
            </Text>
          </Link>
        </li>
        <li>
          <Link href="/favorite">
            {filteredPathName.startsWith('favorite') ? <FilledFavorite /> : <Favorite />}
            <Text
              typography="t7"
              fontWeight="200"
              color={filteredPathName.startsWith('favorite') ? 'primary500' : 'black'}
            >
              즐겨찾기
            </Text>
          </Link>
        </li>
        <li>
          <Link href="/">
            {filteredPathName === '' ? <FilledHome /> : <Home />}
            <Text
              typography="t7"
              fontWeight="200"
              color={filteredPathName === '' ? 'primary500' : 'black'}
            >
              홈
            </Text>
          </Link>
        </li>
        <li>
          <Link href="/channel">
            {filteredPathName === 'channel' ? <FilledChannel /> : <Channel />}
            {/* <Channel color={filteredPathName.startsWith('channel') ? 'primary500' : 'black'} /> */}
            <Text
              typography="t7"
              fontWeight="200"
              color={filteredPathName.startsWith('channel') ? 'primary500' : 'black'}
            >
              채널
            </Text>
          </Link>
        </li>
        <li>
          <Link href="/my-page">
            {filteredPathName === 'my-page' ? <FilledBoard /> : <Board />}
            {/* <Profile color={filteredPathName.startsWith('my-page') ? 'primary500' : 'black'} /> */}
            <Text
              typography="t7"
              fontWeight="200"
              color={filteredPathName.startsWith('my-page') ? 'primary500' : 'black'}
            >
              프로필
            </Text>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BottomNav;
