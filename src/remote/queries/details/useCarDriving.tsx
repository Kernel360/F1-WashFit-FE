import { useQuery } from '@tanstack/react-query';

import { getCarDriving } from '@remote/api/requests/details/details.get.api';
import { IDetails } from '@remote/api/types/details';

function useCarDriving() {
  return useQuery<IDetails[]>({ queryKey: ['car-driving'], queryFn: getCarDriving });
}

export default useCarDriving;
