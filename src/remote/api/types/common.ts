export interface ICommon<T> {
  status: number
  code: string,
  message: string,
  value: T[]
}

export interface ICommonType<T> {
  status: number
  code: string,
  message: string,
  value: T
}
