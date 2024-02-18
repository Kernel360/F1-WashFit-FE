/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classNames from 'classnames/bind';
import Image from 'next/image';

import KakaoLoginScript from '@shared/kakao-script/KakaoLoginScript';

import styles from './KakaoLoginButton.module.scss';

const cx = classNames.bind(styles);

function KakaoLoginButton() {
  // TODO: 인가코드를 이용해서 백엔드에 api 요청하기
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
      <KakaoLoginScript />
    </>
  );
}

export default KakaoLoginButton;
