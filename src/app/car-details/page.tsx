// app/hydratedPosts.jsx
import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@lib/getQueryClient';
import {
  getCarColor, getCarDriving, getCarParking, getCarSegment, getCarType,
} from '@remote/api/requests/additional-info/additional-info.get.api';

import CarDetailsPage from './hydrated-page';

const HydratedCarDetails = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({ queryKey: ['car-segment'], queryFn: getCarSegment }),
    queryClient.prefetchQuery({ queryKey: ['car-type'], queryFn: getCarType }),
    queryClient.prefetchQuery({ queryKey: ['car-color'], queryFn: getCarColor }),
    queryClient.prefetchQuery({ queryKey: ['car-driving'], queryFn: getCarDriving }),
    queryClient.prefetchQuery({ queryKey: ['car-parking'], queryFn: getCarParking }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <CarDetailsPage />
    </Hydrate>
  );
};

export default HydratedCarDetails;
