import { iCart } from "./cart.type"

export interface iOrder {
    id: string
    name: string
    userId: string
    iCart: iCart
}