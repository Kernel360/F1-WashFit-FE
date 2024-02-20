/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any
  }
}

function KakaoScript() {
  const onLoad = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
    }
  };

  return (
    <Script
      strategy="afterInteractive"
      type="text/javascript"
      src={`https://t1.kakaocdn.net/kakao_js_sdk/${process.env.NEXT_PUBLIC_KAKAO_LOGIN_VERSION}/kakao.min.js`}
      onReady={onLoad}
    />
  );
}

export default KakaoScript;
