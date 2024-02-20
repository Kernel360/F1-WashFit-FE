import { useQuery } from '@tanstack/react-query';

import { AdditionalInfoType } from '@/remote/api/types/additional-info';
import { getCarSegment } from '@remote/api/requests/additional-info/additional-info.get.api';

function useCarSegment() {
  return useQuery<AdditionalInfoType>({ queryKey: ['car-segment'], queryFn: getCarSegment });
}

export default useCarSegment;
