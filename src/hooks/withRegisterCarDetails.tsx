/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ComponentType, useCallback, useEffect, useState,
} from 'react';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { getRequest } from '@remote/api/requests/requests.api';
import { ICommon } from '@remote/api/types/common';
import { CarInfoType } from '@remote/api/types/my-page';

function withRegisterCarDetails<Props = Record<string, never>>(
  WrappedComponent: ComponentType<Props>,
) {
  return function RegisteredComponent(props: Props) {
    const router = useRouter();
    const [myCarInfo, setMyCarInfo] = useState<ICommon<CarInfoType> | null>(null);

    // eslint-disable-next-line consistent-return
    const handleRegister = useCallback(async () => {
      try {
        const response = await getRequest<ICommon<CarInfoType>>('/mypage/car');
        setMyCarInfo(response);
        return response;
      } catch (error) {
        if (isAxiosError(error) && error.response) {
          const { status } = error.response;
          if (status === 400) {
            router.push('/car-details');
          }
        }
      }
    }, [router]);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleRegister();
    }, [handleRegister]);

    if (myCarInfo == null) {
      return null;
    }

    return <WrappedComponent {...(props as any)} myCarInfo={myCarInfo} />;
  };
}

export default withRegisterCarDetails;
