import { IAdditionalInfo } from '../../types/additional-info';
import { getRequest } from '../requests.api';

export const getCarSegment = async () => {
  const response = await getRequest<IAdditionalInfo[]>('/commoncode/segment');

  return response;
};

export const getCarType = async () => {
  const response = await getRequest<IAdditionalInfo[]>('/commoncode/cartype');

  return response;
};

export const getCarColor = async () => {
  const response = await getRequest<IAdditionalInfo[]>('/commoncode/color');

  return response;
};

export const getCarDriving = async () => {
  const response = await getRequest<IAdditionalInfo[]>('/commoncode/driving');

  return response;
};

export const getCarParking = async () => {
  const response = await getRequest<IAdditionalInfo[]>('/commoncode/parking');

  return response;
};
