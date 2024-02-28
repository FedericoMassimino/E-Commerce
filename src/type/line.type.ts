import { iProduct } from "./product.type"

export interface iLine {
    Id: string
    quantity: number
    coupon: number
    product: iProduct
}