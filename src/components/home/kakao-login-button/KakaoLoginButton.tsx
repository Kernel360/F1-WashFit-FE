/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image';

import KakaoScript from '@shared/kakao-script/KakaoScript';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;

function KakaoLoginButton() {
  return (
    <>
      <a type="button" href={KAKAO_AUTH_URL} style={{ cursor: 'pointer' }}>
        <Image src="/assets/kakaoLoginButton.png" alt="카카오 로그인 버튼" width={40} height={40} />
      </a>
      <KakaoScript />
    </>
  );
}

export default KakaoLoginButton;
