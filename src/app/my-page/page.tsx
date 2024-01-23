'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import LinkArrow from '@components/icons/LinkArrow';
import BottomNav from '@shared/bottom-nav/BottomNav';
import Spacing from '@shared/spacing/Spacing';
import Text from '@shared/text/Text';
import Title from '@shared/title/Title';

import styles from './page.module.scss';

const FixedBottomButton = dynamic(() => { return import('@shared/fixedBottomButton/FixedBottomButton'); }, {
  ssr: false,
});

const cx = classNames.bind(styles);

function MyProfilePage() {
  const router = useRouter();
  // TODO: 회원 이름 가져오기
  const name = 'washpedia';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn === true) {
    return (
      <>
        <Spacing size={96} />
        <div className={cx('loginDescriptionWrapper')}>
          <Text typography="t1" bold display="block">
            로그인 후
            <br />
            이용해주세요
          </Text>
          <Spacing size={8} />
          <Text display="block" typography="t6" color="tertiary">
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
        <Text display="block" typography="t4">{`${name}님 안녕하세요!`}</Text>
        <Text display="block" typography="t4">오늘도 즐거운 하루 보내세요.</Text>
      </div>
      <Spacing size={8} backgroundColor="tertiary300" />
      <ul>
        <li className={cx('linkInfoContainer')}>
          <Link href="/my-page/profile">
            내 정보
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/my-page/car-details">
            나의 차량 정보
            <LinkArrow />
          </Link>
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/my-page/car-wash-details">
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
          <Link className={cx('logout')} href="/">로그아웃</Link>
        </li>
      </ul>
      <BottomNav />
    </div>
  );
}

export default MyProfilePage;
