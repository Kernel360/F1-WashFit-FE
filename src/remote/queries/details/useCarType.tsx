import { useQuery } from '@tanstack/react-query';

import { getCarType } from '@remote/api/requests/details/details.get.api';
import { IDetails } from '@remote/api/types/details';

function useCarType() {
  return useQuery<IDetails[]>({ queryKey: ['car-type'], queryFn: getCarType });
}

export default useCarType;
