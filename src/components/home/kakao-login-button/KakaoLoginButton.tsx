/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classNames from 'classnames/bind';
import Image from 'next/image';

import KakaoScript from '@shared/kakao-script/KakaoScript';

import styles from './KakaoLoginButton.module.scss';

const cx = classNames.bind(styles);

function KakaoLoginButton() {
  const handleLoginKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  return (
    <>
      <button className={cx('kakaoLoginWrapper')} type="button" onClick={handleLoginKakao}>
        <Image src="/assets/kakao_login_medium_wide.png" alt="카카오 로그인 버튼" width={300} height={45} />
      </button>
      <KakaoScript />
    </>
  );
}

export default KakaoLoginButton;
