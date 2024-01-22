/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// app/hydratedPosts.jsx
import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@lib/getQueryClient';
import {
  getCarWashFrequency, getCarWashCost, getCarWashInterest,
} from '@remote/api/requests/additional-info/additional-info.get.api';

import CarWashDetailsPage from './hydrated-page';

const HydratedCarWashDetails = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({ queryKey: ['car-wash-frequency'], queryFn: getCarWashFrequency }),
    queryClient.prefetchQuery({ queryKey: ['car-wash-cost'], queryFn: getCarWashCost }),
    queryClient.prefetchQuery({ queryKey: ['car-wash-interest'], queryFn: getCarWashInterest }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CarWashDetailsPage />
    </Hydrate>
  );
};

export default HydratedCarWashDetails;
