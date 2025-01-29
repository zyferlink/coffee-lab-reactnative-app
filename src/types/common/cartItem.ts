import { Product } from "./product";

// - CartItem Item
export interface CartItemPrice {
  size: string;
  price: string;
  currency: string;
  quantity: number;
}

export interface CartItem extends Product {
  prices: CartItemPrice[];
}
