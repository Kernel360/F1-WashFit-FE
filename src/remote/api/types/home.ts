import { ICommon } from './common';

export interface IBanner {
  id: number
  link: string
  src: string
  alt: string
}

export interface IRecommendProducts extends IBanner {
  productName: string
}

export interface IProduct {
  productNo: number
  productName: string
  barcode: string
  imageSource: string
  reportNumber: string
  safetyStatus: string
  viewCount: number
  createdAt: string
  createdBy: string
  modifiedAt: string
  modifiedBy: string
  brand: string
  upperItem: string
}

export interface IProductDetails extends IProduct {
  companyName: string
  productType: string
  manufactureType: string
  manufactureMethod: string
  weight: string
  mainSubstance: string
  grade: number
  reviewCnt: number
  viewCount: number
}

export type BannerType = ICommon<IBanner[]>;
export type RecommendProductsType = ICommon<IRecommendProducts[]>;
export type ProductType = ICommon<IProduct[]>;
export type ProductDetailsType = ICommon<IProductDetails[]>;
