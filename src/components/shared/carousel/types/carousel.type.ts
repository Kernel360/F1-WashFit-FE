export interface IBannerData {
  id: number
  link: string
  src: string
  alt: string
}

export interface IRecommendList extends IBannerData {
  productName: string
}
