import { useQuery } from '@tanstack/react-query';

import { getCarWashFrequency } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarWashFrequency() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-wash-frequency'], queryFn: getCarWashFrequency });
}

export default useCarWashFrequency;
