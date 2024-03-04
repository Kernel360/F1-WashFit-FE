import { ICommon } from './common';

export interface IBanner {
  productNo: number
  imageSource: string
  alt: string
  item: string
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
  brand: string
  upperItem: string
  createdAt: string
  createdBy: string
  modifiedAt: string
  modifiedBy: string
}

export interface IProductContent {
  content: IProduct[]
}

export interface IProductPageInfo {
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
  }
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  numberOfElements: number
  first: boolean
  empty: boolean
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
export type ProductListInfoType = ICommon<IProductContent & IProductPageInfo>;
export type ProductDetailsType = ICommon<IProductDetails>;
