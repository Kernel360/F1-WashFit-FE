/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, useEffect } from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

import { useAppSelector } from '@stores/hooks';

function withAuth<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
) {
  return function AuthenticatedComponent(props: Props) {
    const router = useRouter();
    const userId = useAppSelector(
      (state) => { return state.user.id; },
      (prev, curr) => { return prev === curr; },
    );

    useEffect(() => {
      if (userId == null) {
        router.push('/');
        toast.info('로그인 해주세요.');
      }
    }, [userId, router]);

    if (userId == null) {
      return null;
    }

    return <WrappedComponent {...(props as any)} />;
  };
}

export default withAuth;
