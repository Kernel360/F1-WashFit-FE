import { useQuery } from '@tanstack/react-query';

import { getCarParking } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarParking() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-parking'], queryFn: getCarParking });
}

export default useCarParking;
