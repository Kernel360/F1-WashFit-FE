import { useQuery } from '@tanstack/react-query';

import { getCarSegment } from '@remote/api/requests/details/details.get.api';
import { IDetails } from '@remote/api/types/details';

function useCarSegment() {
  return useQuery<IDetails[]>({ queryKey: ['car-segment'], queryFn: getCarSegment });
}

export default useCarSegment;
