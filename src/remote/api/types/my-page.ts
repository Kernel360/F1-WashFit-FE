import { IAdditionalInfo, ICarDetails, ICarWashDetails } from './additional-info';
import { ICommon } from './common';

/* ----- 차량 정보 타입 ----- */
export interface ICarInfo {
  segment_options: IAdditionalInfo[]
  carType_options: IAdditionalInfo[]
  color_options: IAdditionalInfo[]
  driving_options: IAdditionalInfo[]
  parking_options: IAdditionalInfo[]
  car_info: ICarDetails
}

/* ----- 세차용품 정보 타입 ----- */
export interface ICarWashInfo {
  frequency_options: IAdditionalInfo[]
  cost_options: IAdditionalInfo[]
  interest_options: IAdditionalInfo[]
  wash_info: ICarWashDetails
}

/* ----- 마이페이지 dropdown 정보 ----- */
export interface IinfoOptions {
  [key: string]: {
    [key: number]: string
  };
}

export type CarInfoType = ICommon<ICarInfo>;
export type CarWashInfoType = ICommon<ICarWashInfo>;
