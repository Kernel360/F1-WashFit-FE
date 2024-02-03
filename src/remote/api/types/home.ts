import { ICommon } from './common';

export interface IBanner {
  id: number
  link: string
  imageSource: string
  alt: string
}

export interface IRecommendProducts extends IBanner {
  productName: string
}

export interface IProduct {
  brand: string
  upperItem: string
  productNo: number
  imageSource: string
  productName: string
  safetyStatus: string
  barcode: string
  reportNumber: string
  viewCount: number
  createdAt: string
  createdBy: string
  modifiedAt: string
  modifiedBy: string
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
  usage: string
  usagePrecaution: string
  firstAid: string
}

export type BannerType = ICommon<IBanner[]>;
export type RecommendProductsType = ICommon<IRecommendProducts[]>;
export type ProductType = ICommon<IProduct[]>;
export type ProductDetailsType = ICommon<IProductDetails>;
