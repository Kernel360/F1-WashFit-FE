import { useQuery } from '@tanstack/react-query';

import { getCarType } from '@remote/api/requests/additional-info/additional-info.get.api';
import { IAdditionalInfo } from '@remote/api/types/additional-info';

function useCarType() {
  return useQuery<IAdditionalInfo[]>({ queryKey: ['car-type'], queryFn: getCarType });
}

export default useCarType;
