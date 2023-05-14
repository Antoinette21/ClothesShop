export interface Product {
  id: string,
  name: string,
  brand: string,
  size: number[],
  price: number,
  category: string,
  subCategory: string,
  description: string,
  mainImage: string,
  listImage: string[],
  isLike: boolean
}
