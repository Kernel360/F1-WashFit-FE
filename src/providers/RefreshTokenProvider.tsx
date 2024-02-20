/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */

'use client';

import { useEffect } from 'react';

import useIntervalRefreshToken from '@hooks/useIntervalRefreshToken';
import { useAppSelector } from '@stores/hooks';

function RefreshTokenProvider({ children }: { children: React.ReactNode }) {
  const { startRefreshTokenInterval, refreshTokenClear } = useIntervalRefreshToken();
  const userId = useAppSelector((state) => { return state.user.id; });

  useEffect(() => {
    if (userId !== null) {
      startRefreshTokenInterval();
      console.log('RefreshTokenProvider mounted');
    }

    // cleanup 함수를 이용하여 컴포넌트가 unmount 될 때 clearInterval 호출
    return () => {
      refreshTokenClear();
      console.log('RefreshTokenProvider unmounted');
    };
  }, [userId]);

  return <>{children}</>;
}

export default RefreshTokenProvider;
