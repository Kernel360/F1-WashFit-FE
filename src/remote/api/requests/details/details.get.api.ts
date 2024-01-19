import { IDetails } from '../../types/details';
import { getRequest } from '../requests.api';

export const getCarSegment = async () => {
  const response = await getRequest<IDetails[]>('/commoncode/segment');

  return response;
};

export const getCarType = async () => {
  const response = await getRequest<IDetails[]>('/commoncode/cartype');

  return response;
};

export const getCarColor = async () => {
  const response = await getRequest<IDetails[]>('/commoncode/color');

  return response;
};

export const getCarDriving = async () => {
  const response = await getRequest<IDetails[]>('/commoncode/driving');

  return response;
};

export const getCarParking = async () => {
  const response = await getRequest<IDetails[]>('/commoncode/parking');

  return response;
};
