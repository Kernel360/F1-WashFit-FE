import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ModalContextProvider } from '@contexts/ModalContext';
import { CookieProvider } from '@providers/CookieProvider';
import MockProvider from '@providers/MockProvider';
import QueryProvider from '@providers/QueryProvider';
import RefreshTokenProvider from '@providers/RefreshTokenProvider';
import StoreProvider from '@providers/StoreProvider';
import ToastProvider from '@providers/ToastProvider';

// import { CookiesProvider } from 'react-cookie';

export const metadata: Metadata = {
  title: 'washfit',
  description: '안전한 세차용품 정보 제공 플랫폼',
  verification: {
    google: 'R8i7olnVmRJVvhQDYihBy18FkU6RpRiTufHwfrAow4E',
    other: {
      'naver-site-verification': '34fe521f58e0a8db451162b240ce08cb94cf4736',
    },
  },
};

const pretendard = localFont({
  src: [
    {
      path: './font/PretendardVariable.woff2',
    },
    {
      path: './font/PretendardVariable.ttf',
    },
  ],
  display: 'fallback',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <MockProvider>
          <CookieProvider>
            <QueryProvider>
              <StoreProvider>
                <ToastProvider>
                  <ModalContextProvider>
                    <RefreshTokenProvider>{children}</RefreshTokenProvider>
                  </ModalContextProvider>
                </ToastProvider>
              </StoreProvider>
            </QueryProvider>
          </CookieProvider>
        </MockProvider>
        <div id="portal-root" />
        <div id="drawer-root" />
      </body>
    </html>
  );
}
