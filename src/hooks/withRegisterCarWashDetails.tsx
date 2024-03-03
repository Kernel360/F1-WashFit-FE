/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComponentType, useCallback, useEffect, useState,
} from 'react';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { getRequest } from '@remote/api/requests/requests.api';
import { CarWashInfoType } from '@remote/api/types/my-page';

function withRegisterCarWashDetails<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
) {
  return function RegisteredComponent(props: Props) {
    const router = useRouter();
    const [myCarWashInfo, setMyCarWashInfo] = useState<CarWashInfoType | null>(null);
    // eslint-disable-next-line consistent-return
    const handleRegister = useCallback(async () => {
      try {
        const response = await getRequest<CarWashInfoType>('/mypage/wash');
        setMyCarWashInfo(response);
        return response;
      } catch (error) {
        if (isAxiosError(error) && error.response) {
          const { status } = error.response;
          if (status === 400) {
            router.push('/car-wash-details');
          }
        }
      }
    }, [router]);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleRegister();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (myCarWashInfo == null) {
      return null;
    }

    return <WrappedComponent {...(props as any)} myCarWashInfo={myCarWashInfo} />;
  };
}

export default withRegisterCarWashDetails;
