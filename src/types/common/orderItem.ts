import { CartItem } from "./cartItem";

export interface OrderItem {
    orderDate: string;
    paymentMethod: string;
    totalPrice: string;
    itemList: CartItem[];
}
