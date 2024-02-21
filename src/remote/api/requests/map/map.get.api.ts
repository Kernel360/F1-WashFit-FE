import { IMarkersParameter, MarkersType } from '../../types/map';
import { getRequest } from '../requests.api';

// 세차장 위치 마커

export const getMarkers = async ({
  minX, maxX, minY, maxY, level,
}: IMarkersParameter) => {
  const response = await getRequest<MarkersType>(`/washzones?minX=${minX}&maxX=${maxX}&minY=${minY}&maxY=${maxY}&&level=${level}`);

  return response;
};
