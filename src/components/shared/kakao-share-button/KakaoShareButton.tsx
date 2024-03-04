/* eslint-disable jsx-a11y/control-has-associated-label */

import { usePathname } from 'next/navigation';

import Share from '@components/icons/Share';
import useKakaoShare from '@hooks/useKakaoShare';
import KakaoScript from '@shared/kakao-script/KakaoScript';

function KakaoShareButton() {
  const pathName = usePathname().substring(1);

  const containerId = useKakaoShare('#kakao-link-btn', process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY!, pathName);

  return (
    <>
      <button id={containerId} style={{ cursor: 'pointer' }}>
        <Share />
      </button>
      <KakaoScript />
    </>
  );
}
export default KakaoShareButton;
