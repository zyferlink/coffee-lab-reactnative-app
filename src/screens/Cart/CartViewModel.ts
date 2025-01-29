import { useStore } from "../../state/useStore";

export const useCartViewModel = () => {
    const cartList= useStore((state: any) => state.cartList);
    const cartPrice = useStore((state: any) => state.cartPrice);
    const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
    const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity);
    const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity);
  
  
    const handleIncrementQuantity = (id: string, size: string) => {
      incrementCartItemQuantity(id, size);
      calculateCartPrice();
    };
  
    const handleDecrementQuantity = (id: string, size: string) => {
      decrementCartItemQuantity(id, size);
      calculateCartPrice();
    };

  return {
    cartList,
    cartPrice,
    handleIncrementQuantity,
    handleDecrementQuantity,
  };
};
