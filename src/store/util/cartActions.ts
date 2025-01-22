import produce from "immer";

export const addToCart = (state: any, cartItem: any) => {
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
    state.cartList[index].ItemPrice = price.toFixed(2).toString();
    totalPrice += price;
  }
  state.cartPrice = totalPrice.toFixed(2).toString();
};


export const incrementCartItemQuantiy = (state: any, id: string, size: string) => {
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
