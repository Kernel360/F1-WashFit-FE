import { useQuery } from '@tanstack/react-query';

import { getCarSegment } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarSegment() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-segment'], queryFn: getCarSegment });
}

export default useCarSegment;
