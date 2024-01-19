export interface IDetails {
  codeNo: number
  codeName: string
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
