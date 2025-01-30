import { useState } from 'react';
import { useStore } from '../../state/useStore';
import { Product } from '../../types/common/product';
import { PRODUCT_TYPES } from '../../config/specialTypes';
import { CartItem } from '../../types/common/cartItem';
import { NAVIGATORS, SCREENS } from '../../config/screenNames';

const DetailViewModel = (navigation: any, route: any) => {
  const addToCart = useStore((state: any) => state.addToCart);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const selectedItem: Product = useStore((state: any) =>
    route.params.type == PRODUCT_TYPES.COFFEE ? state.coffeeList : state.beanList,
  )[route.params.index];

  const [fullDescription, setFullDescription] = useState(false);
  const [price, setPrice] = useState(selectedItem.prices[0]);

  const backHandler = () => {
    navigation.pop();
  };

  const toggleFavorite = (id: string, type: string, isFavorite: boolean) => {
    isFavorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  const toggleDescription = () => {
    setFullDescription((prev) => !prev);
  };

  const addToCartHandler = () => {
    const cartItem: CartItem = {
      ...selectedItem,
      prices: [{ ...price, quantity: 1 }]
    };
    addToCart(cartItem);
    calculateCartPrice();
    navigation.navigate(NAVIGATORS.TAB, { screen: SCREENS.CART });
  };

  return {
    selectedItem,
    fullDescription,
    price,
    backHandler,
    toggleFavorite,
    toggleDescription,
    setPrice,
    addToCartHandler
  };
};

export default DetailViewModel;