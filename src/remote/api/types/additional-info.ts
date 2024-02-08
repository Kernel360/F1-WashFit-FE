import { ColorMapType } from '@components/additional-info/car-details/color-picker/colorPicker.type';

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
