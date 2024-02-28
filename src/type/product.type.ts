export interface iProduct {
    id: string
    name: string
    price: number
    quantity: number
    stock: boolean
    isDiscounted: boolean
    howMuchIsDiscounted: number
    categoryId: string
}