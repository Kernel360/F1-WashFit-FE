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

export interface IProductList {
  id: number
  img: string
  name: string
  brand: string
  category: string
  warningLevel: string
}

export type BannerType = ICommon<IBanner>;
export type RecommendProductsType = ICommon<IRecommendProducts>;
export type ProductListType = ICommon<IProductList>;
