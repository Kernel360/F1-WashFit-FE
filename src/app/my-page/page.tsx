'use client';

import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import LinkArrow from '@components/icons/LinkArrow';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import Title from '@shared/title/Title';
import { useAppSelector, useAppDispatch } from '@stores/hooks';
import { clearUserId } from '@stores/slices/userSlice';

import styles from './page.module.scss';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

const cx = classNames.bind(styles);

function MyProfilePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, removeCookie] = useCookies(['token']);

  // eslint-disable-next-line max-len
  const userId = useAppSelector((state) => { return state.user.id; }, (prev, curr) => { return prev === curr; });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(userId !== null);
  }, [userId]);

  // 로그아웃
  const handleLoggedOut = () => {
    // TODO: 먼저 로그아웃 모달이 뜨도록 할지 논의필요
    dispatch(clearUserId());
    removeCookie('token', { path: '/' });
    router.push('/');
  };

  if (isLoggedIn === false) {
    return (
      <>
        <Spacing size={96} />
        <div className={cx('loginDescriptionWrapper', 'mainContainer')}>
          <Text typography="t1" bold display="block" textAlign="start">
            로그인 후
            <br />
            이용해주세요.
          </Text>
          <Spacing size={8} />
          <Text display="block" typography="t6" color="gray500" textAlign="start">
            로그인 후 내 차량 정보와
            <br />
            세차 정보를 등록해 보세요.
          </Text>
        </div>
        <FixedBottomButton onClick={() => { return router.push('/login'); }}>로그인 하기</FixedBottomButton>
      </>
    );
  }

  return (
    <div className={cx('container')}>
      <div className={cx('titleWrapper')}>
        <Title title="프로필" titleSize="t3" />
      </div>
      <div className={cx('nameWrapper')}>
        <Text display="block" typography="t4">{`${userId}님 안녕하세요!`}</Text>
        <Text display="block" typography="t4">오늘도 즐거운 하루 보내세요.</Text>
      </div>
      <Spacing size={8} backgroundColor="gray100" />
      <ul>
        <li className={cx('linkInfoContainer')}>
          <Link href="/my-page/profile">
            내 정보
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/car-details">
            나의 차량 정보
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/car-wash-details">
            나의 세차 정보
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/">
            리뷰 관리
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="https://forms.gle/ty3EwK1Qmwe5FW1w6">
            문의하기
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <button className={cx('logout')} onClick={handleLoggedOut}>
            로그아웃
          </button>
        </li>
      </ul>
      <BottomNav />
    </div>
  );
}

export default MyProfilePage;
