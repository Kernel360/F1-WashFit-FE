import { useQuery } from '@tanstack/react-query';

import { getMarkers } from '@/remote/api/requests/map/map.get.api';
import { IMarkersParameter, MarkersType } from '@/remote/api/types/map';

function useMarkers({
  minX, maxX, minY, maxY, level,
}: IMarkersParameter) {
  return useQuery<MarkersType>({
    queryKey: ['MarkerType', minX, minY, maxX, maxY, level],
    queryFn: () => {
      return getMarkers({
        minX, maxX, minY, maxY, level,
      });
    },
  });
}

export default useMarkers;
