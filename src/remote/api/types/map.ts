import { ICommon } from './common';

export interface IMarkersParameter {
  minX: number
  maxX: number
  minY: number
  maxY: number
  level: number
}

export interface IMarkers {
  name: string
  address: string
  latitude: number
  longitude: number
  type: '실내' | '개러지' | null
  remarks: null
}

export type MarkersType = ICommon<IMarkers[]>;
