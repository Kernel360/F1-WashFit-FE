import { useQuery } from '@tanstack/react-query';

import { getCarParking } from '@remote/api/requests/additional-info/additional-info.get.api';
import { AdditionalInfoType } from '@remote/api/types/additional-info';

function useCarParking() {
  return useQuery<AdditionalInfoType>({ queryKey: ['car-parking'], queryFn: getCarParking });
}

export default useCarParking;
