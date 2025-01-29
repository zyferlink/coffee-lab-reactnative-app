import produce from "immer";
import { CartItem } from "../../types/common/cartItem";
import { OrderItem } from "../../types/common/orderItem";


export const addToCart = (state: any, cartItem: CartItem) => {
  let found = false;
  for (let index = 0; index < state.cartList.length; index++) {
    if (state.cartList[index].id === cartItem.id) {
      found = true;
      let size = false;

      for (let priceIndex = 0; priceIndex < state.cartList[index].prices.length; priceIndex++) {
        if (state.cartList[index].prices[priceIndex].size === cartItem.prices[0].size) {
          size = true;
          state.cartList[index].prices[priceIndex].quantity++;
          break;
        }
      }

      if (!size) {
        state.cartList[index].prices.push(cartItem.prices[0]);
      }

      state.cartList[index].prices.sort((a: any, b: any) => b.size - a.size);
      break;
    }
  }
  if (!found) {
    state.cartList.push(cartItem);
  }
};

export const calculateCartPrice = (state: any) => {
  let totalPrice = 0;
  for (let index = 0; index < state.cartList.length; index++) {
    let price = 0;
    for (let priceIndex = 0; priceIndex < state.cartList[index].prices.length; priceIndex++) {
      price +=
        parseFloat(state.cartList[index].prices[priceIndex].price) *
        state.cartList[index].prices[priceIndex].quantity;
    }
    state.cartList[index].itemPrice = price.toFixed(2).toString();
    totalPrice += price;
  }
  state.cartPrice = totalPrice.toFixed(2).toString();
};

export const incrementCartItemQuantity = (state: any, id: string, size: string) => {
  for (let index = 0; index < state.cartList.length; index++) {
    if (state.cartList[index].id == id) {

      for (let priceIndex = 0; priceIndex < state.cartList[index].prices.length; priceIndex++) {
        if (state.cartList[index].prices[priceIndex].size == size) {

          state.cartList[index].prices[priceIndex].quantity++;
          break;
        }
      }

    }
  }
};

export const decrementCartItemQuantity = (state: any, id: string, size: string) => {
  for (let index = 0; index < state.cartList.length; index++) {
    if (state.cartList[index].id == id) {

      for (let priceIndex = 0; priceIndex < state.cartList[index].prices.length; priceIndex++) {
        if (state.cartList[index].prices[priceIndex].size == size) {

          if (state.cartList[index].prices.length > 1) {
            if (state.cartList[index].prices[priceIndex].quantity > 1) {
              state.cartList[index].prices[priceIndex].quantity--;
            } else {
              state.cartList[index].prices.splice(priceIndex, 1);
            }
          }
          else {
            if (state.cartList[index].prices[priceIndex].quantity > 1) {
              state.cartList[index].prices[priceIndex].quantity--;
            } else {
              state.cartList.splice(index, 1);
            }
          }
          break;
        }
      }

    }
  }
};

export const addToOrderHistoryFromCart = (state: any, paymentMethod: string) => {
  let totalPrice = state.cartList.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + parseFloat(currentValue.itemPrice),
    0,
  );

  const dateTime = new Date().toDateString() + " " + new Date().toLocaleTimeString();
  const order: OrderItem = {
    orderDate: dateTime,
    paymentMethod: paymentMethod,
    totalPrice: totalPrice.toFixed(2).toString(),
    itemList: state.cartList,
  }

  if (state.orderHistoryList.length > 0) {
    state.orderHistoryList.unshift(order)
  } else {
    state.orderHistoryList.push(order)
  }
  state.cartList = [];

};
