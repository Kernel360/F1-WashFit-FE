/* eslint-disable jsx-a11y/control-has-associated-label */

import Script from 'next/script';

import Share from '@/components/icons/Share';
import useKakaoShare from '@hooks/useKakaoShare';

function KakaoShareButton() {
  const containerId = useKakaoShare('#kakao-link-btn', process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY!);

  return (
    <>
      <button id={containerId} style={{ cursor: 'pointer' }}>
        <Share />
      </button>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://t1.kakaocdn.net/kakao_js_sdk/${process.env.NEXT_PUBLIC_KAKAO_LOGIN_VERSION}/kakao.min.js`}
      />
    </>
  );
}
export default KakaoShareButton;
