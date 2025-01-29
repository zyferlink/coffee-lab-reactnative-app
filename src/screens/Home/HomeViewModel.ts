import { useState, useRef, useEffect } from 'react';
import { FlatList, ToastAndroid } from 'react-native';
import { Product } from '../../types/common/product';
import { useStore } from '../../state/useStore';
import { CartItem } from '../../types/common/cartItem';
import { MESSAGES } from '../../config/messages';
import { CONSTANTS } from '../../config/constants';


export const useHomeViewModel = () => {
  const listRef = useRef<FlatList<Product>>(null);

  const coffeeList = useStore((state: any) => state.coffeeList);
  const beanList = useStore((state: any) => state.beanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState(getCategoriesFromList(coffeeList));
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getSortedCoffeeList(categoryIndex.category, coffeeList),
  );

  useEffect(() => {
    setCategories(getCategoriesFromList(coffeeList));
    setSortedCoffee(getSortedCoffeeList(categoryIndex.category, coffeeList));
  }, [coffeeList]);

  const handleCategoryChange = (index: number) => {
    scrollToTop();
    setCategoryIndex({ index, category: categories[index] });
    setSortedCoffee(getSortedCoffeeList(categories[index], coffeeList));
  };

  const searchCoffee = (search: string) => {
    scrollToTop();
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee(coffeeList.filter((item : any) => item.name.toLowerCase().includes(search.toLowerCase())));
  };

  const resetSearchCoffee = () => {
    scrollToTop();
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee([...coffeeList]);
    setSearchText('');
  };

  const addToCartHandler = (cartItem: CartItem) => {
    console.log(JSON.stringify(cartItem));
    addToCart(cartItem);
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      MESSAGES.SUCCESS.ITEM_ADDED_TO_CART(cartItem.name),
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const scrollToTop = () => {
    if (listRef?.current) {
      listRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  };

  return {
    listRef,
    searchText, setSearchText,
    categories, categoryIndex, sortedCoffee,
    handleCategoryChange, searchCoffee, resetSearchCoffee, addToCartHandler,
    beanList,
  };
};

// UTILITY FUNCTIONS
// ->
const getCategoriesFromList = (coffeeList: Product[]) => {
  const categoryCounts: Record<string, number> = {};
  coffeeList.forEach((item) => {
    if (!categoryCounts[item.name]) {
      categoryCounts[item.name] = 0;
    } else {
      categoryCounts[item.name]++;
    }
  });
  // Create categories list with "All" at the start
  return [CONSTANTS.GENERAL.CATEGORY_ALL, ...Object.keys(categoryCounts)];
};

const getSortedCoffeeList = (selectedCategory: string, coffeeList: Product[]) => {
  return selectedCategory === CONSTANTS.GENERAL.CATEGORY_ALL
    ? coffeeList
    : coffeeList.filter((item) => item.name === selectedCategory);
};
