/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from 'react';

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

    if (userId == null) {
      router.push('/');
      return null;
    }
    return <WrappedComponent {...(props as any)} />;
  };
}

export default withAuth;
