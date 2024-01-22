import { useQuery } from '@tanstack/react-query';

import { getCarWashCost } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarWashCost() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-wash-cost'], queryFn: getCarWashCost });
}

export default useCarWashCost;
