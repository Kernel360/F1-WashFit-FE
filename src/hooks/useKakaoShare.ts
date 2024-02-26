/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useCallback, useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any
  }
}

function useKakaoShare(containerId: string, key: string, productUrl: string) {
  const createShareButton = useCallback(() => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(key);
      }
      kakao.Share.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: containerId,
        objectType: 'feed',
        content: {
          title: 'Washfit',
          description: '안전한 세차용품 정보 제공 플랫폼',
          imageUrl:
            'https://tago.kr/images/sub/TG300-D02_img01.png',
          link: {
            webUrl: `https://dev.washfit.site/${productUrl}`,
            mobileWebUrl: `https://dev.washfit.site/${productUrl}`,
          },
        },
        social: {
          likeCount: 77,
          commentCount: 55,
          sharedCount: 333,
        },
        buttons: [
          // 카카오톡 웹에서 보기
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: `https://dev.washfit.site/${productUrl}`,
              webUrl: `https://dev.washfit.site/${productUrl}`,
            },
          },
          // 카카오톡 모바일에서 보기
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: `https://dev.washfit.site/${productUrl}`,
              webUrl: `https://dev.washfit.site/${productUrl}`,
            },
          },
        ],
      });
    }
  }, [containerId, productUrl, key]);

  useEffect(() => {
    createShareButton();
  }, [createShareButton]);

  // #kakao-link-btn과 같은 id에서 '#'제거 과정
  const id = containerId.substring(1);
  return id;
}

export default useKakaoShare;
