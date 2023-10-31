export interface Data {
  limit?: number;
  products?: [];
  skip?: number;
  total?: number;
}

export interface Product {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: []
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}[]
