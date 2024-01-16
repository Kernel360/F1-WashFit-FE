export interface IBannerdata {
  id: number
  link: string
  src: string
  alt: string
}

export interface IRecommandList extends IBannerdata {
  productName: string
}
