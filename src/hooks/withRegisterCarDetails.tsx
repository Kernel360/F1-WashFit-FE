import {
  ComponentType, useCallback, useEffect, useState,
} from 'react';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { getRequest } from '@remote/api/requests/requests.api';
import { CarInfoType } from '@remote/api/types/my-page';

interface WithCarInfoProps {
  myCarInfo: CarInfoType;
}

function withRegisterCarDetails<Props extends WithCarInfoProps>(
  WrappedComponent: ComponentType<Props>,
) {
  return function RegisteredComponent(props: Omit<Props, keyof WithCarInfoProps>) {
    const router = useRouter();
    const [myCarInfo, setMyCarInfo] = useState<CarInfoType | null>(null);

    // eslint-disable-next-line consistent-return
    const handleRegister = useCallback(async () => {
      try {
        const response = await getRequest<CarInfoType>('/mypage/car');
        setMyCarInfo(response);
        return response;
      } catch (error) {
        if (isAxiosError(error) && error.response) {
          const { status } = error.response;
          if (status === 400) {
            router.push('/car-details');
          }
        }
        return null;
      }
    }, [router]);

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      handleRegister();
    }, [handleRegister]);

    if (myCarInfo == null) {
      return null;
    }

    return <WrappedComponent {...props as Props} myCarInfo={myCarInfo} />;
  };
}

export default withRegisterCarDetails;
