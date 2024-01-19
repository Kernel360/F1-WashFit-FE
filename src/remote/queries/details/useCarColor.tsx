import { useQuery } from '@tanstack/react-query';

import { getCarColor } from '@remote/api/requests/details/details.get.api';
import { IDetails } from '@remote/api/types/details';

function useCarColor() {
  return useQuery<IDetails[]>({ queryKey: ['car-color'], queryFn: getCarColor });
}

export default useCarColor;
