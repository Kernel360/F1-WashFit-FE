import { useQuery } from '@tanstack/react-query';

import { getCarParking } from '@remote/api/requests/details/details.get.api';
import { IDetails } from '@remote/api/types/details';

function useCarParking() {
  return useQuery<IDetails[]>({ queryKey: ['car-parking'], queryFn: getCarParking });
}

export default useCarParking;
