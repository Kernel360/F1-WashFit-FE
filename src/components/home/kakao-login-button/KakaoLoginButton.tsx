/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image';

import KakaoScript from '@shared/kakao-script/KakaoScript';

function KakaoLoginButton() {
  // TODO: 인가코드를 이용해서 백엔드에 api 요청하기
  const handleLoginKakao = () => {
    window.Kakao.Auth.authorize({
      redirectUri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
    });
  };

  return (
    <>
      <button type="button" onClick={handleLoginKakao}>
        <Image src="/assets/kakaoLoginButton.png" alt="카카오 로그인 버튼" width={40} height={40} />
      </button>
      <KakaoScript />
    </>
  );
}

export default KakaoLoginButton;
