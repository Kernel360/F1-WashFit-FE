// app/hydratedPosts.jsx
import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@lib/getQueryClient';
import {
  getCarWashFrequency, getCarWashCost,
} from '@remote/api/requests/additional-info/additional-info.get.api';

import CarWashDetailsPage from './hydrated-page';

const HydratedCarDetails = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({ queryKey: ['car-wash-frequency'], queryFn: getCarWashFrequency }),
    queryClient.prefetchQuery({ queryKey: ['car-wash-cost'], queryFn: getCarWashCost }),
    // 주요관심사
    // queryClient.prefetchQuery({ queryKey: ['car-wash-'], queryFn: getCarWash }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CarWashDetailsPage />
    </Hydrate>
  );
};

export default HydratedCarDetails;
