import { ColorMapType } from '@components/additional-info/car-details/color-picker/colorPicker.type';

import { ICommon } from './common';

export interface IAdditionalInfo {
  codeNo: number
  codeName: ColorMapType
  upperNo: number
  upperName: string
  sortOrder: number
  isUsed: boolean
  description: string
  createdAt: Date
  createdBy: string
  modifiedAt: Date | null
  modifiedBy: string | null
}

export interface ICarDetails {
  segment: number
  carType: number
  color: number
  driving: number
  parking: number
}

export interface ICarWashDetails {
  frequency: number
  cost: number
  interest: number
}

export type AdditionalInfoType = ICommon<IAdditionalInfo[]>;
