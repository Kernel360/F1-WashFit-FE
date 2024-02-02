'use client';

import { CookiesProvider } from 'react-cookie';

export function CookieProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
