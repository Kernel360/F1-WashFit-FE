export interface ICommon<T> {
  status: number
  code: string,
  message: string,
  value: T[]
}
