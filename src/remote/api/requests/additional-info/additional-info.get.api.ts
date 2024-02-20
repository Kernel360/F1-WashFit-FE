import { AdditionalInfoType } from '../../types/additional-info';
import { getRequest } from '../requests.api';

export const getCarSegment = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/segment');

  return response;
};

export const getCarType = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/cartype');

  return response;
};

export const getCarColor = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/color');

  return response;
};

export const getCarDriving = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/driving');

  return response;
};

export const getCarParking = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/parking');

  return response;
};

// 세차빈도 : frequency
export const getCarWashFrequency = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/frequency');

  return response;
};

// 지출비용 : cost
export const getCarWashCost = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/cost');

  return response;
};

// 주요관심사 : interest
export const getCarWashInterest = async () => {
  const response = await getRequest<AdditionalInfoType>('/commoncode/interest');

  return response;
};
