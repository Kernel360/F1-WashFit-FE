import classNames from 'classnames/bind';
import Link from 'next/link';

import BottomNav from '@/components/shared/bottom-nav/BottomNav';
import Button from '@/components/shared/button/Button';
import LinkArrow from '@components/icons/LinkArrow';
import Spacing from '@components/shared/spacing/Spacing';
import Text from '@components/shared/text/Text';
import Title from '@components/shared/title/Title';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

function MyProfilePage() {
  const name = 'washpedia';
  const isLoggedIn = true;

  if (isLoggedIn === true) {
    return (
      <>
        <Spacing size={220} />
        <div className={cx('loginDescriptionWrapper')}>
          <Title
            title={'로그인 후\n이용해 주세요.'}
            description={'로그인 후 내 차량 정보와 세차 정보를\n등록해 보세요.'}
            descriptionColor="tertiary"
          />
          <Spacing size={260} />
          <Button size="large" full>로그인 하기</Button>
        </div>
        <BottomNav />
      </>
    );
  }

  return (
    <>
      <Spacing size={20} />
      <div className={cx('titleWrapper')}>
        <Title title="프로필" titleSize="t3" />
      </div>
      <div className={cx('nameWrapper')}>
        <Text typography="t4">{`${name} 님 안녕하세요!`}</Text>
      </div>
      <Spacing size={8} backgroundColor="tertiary300" />
      <Spacing size={120} />
      <ul>
        <li className={cx('linkInfoContainer')}>
          <Link href="/">나의 차량 정보</Link>
          <LinkArrow />
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/">나의 세차 정보</Link>
          <LinkArrow />
        </li>
        <li className={cx('linkInfoContainer')}>
          <Link href="/">리뷰 관리</Link>
          <LinkArrow />
        </li>
      </ul>
      <BottomNav />
    </>
  );
}

export default MyProfilePage;
