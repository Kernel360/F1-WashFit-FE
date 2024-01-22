import { useQuery } from '@tanstack/react-query';

import { getCarWashInterest } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarWashInterest() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-wash-interest'], queryFn: getCarWashInterest });
}

export default useCarWashInterest;
