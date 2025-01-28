// React and React Native
import React, { useRef, useState } from 'react'
import {
  Animated, FlatList, ScrollView, StatusBar,
  Text, ToastAndroid, TouchableOpacity, View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
// Configuration and components
import { colors } from '../../config/colors';
import { SCREENS } from '../../config/screenNames';
import { MESSAGES } from '../../config/messages';
import { CONSTANTS } from '../../config/constants';
import { useStore } from '../../state/useStore'
import { Product } from '../../types/common/product';
import { CartItem } from '../../types/common/cartItem';
import HeaderBar from '../../components/common/HeaderBar';
import ProductCard from '../../components/common/ProductCard';
import SearchInput from './components/SearchInput';
import CategoryScroller from './components/CategoryScroller';
import tw from 'twrnc';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const listRef = useRef<FlatList<Product>>(null);
  const tabBarHeight = useBottomTabBarHeight();
  const beanList = useStore((state: any) => state.beanList);
  const addToCart = useStore((state: any) => state.addToCart);
  const coffeeList = useStore((state: any) => state.coffeeList);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState(getCategoriesFromList(coffeeList));
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getSortedCoffeeList(categoryIndex.category, coffeeList)
  );

  const handleCategoryChange = (index: number) => {
    scrollToTop(listRef);
    setCategoryIndex({
      index: index,
      category: categories[index]
    });
    setSortedCoffee([
      ...getSortedCoffeeList(categories[index], coffeeList),
    ]);
  }

  const searchCoffee = (search: string) => {
    scrollToTop(listRef);
    setCategoryIndex({
      index: 0, category: categories[0]
    });
    setSortedCoffee([
      ...coffeeList.filter((item: any) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    ]);
  };

  const resetSearchCoffee = () => {
    scrollToTop(listRef);
    setCategoryIndex({
      index: 0, category: categories[0]
    });
    setSortedCoffee([...coffeeList]);
    setSearchText("");
  };

  const addToCartHandler = (
    cartItem: CartItem,
  ) => {
    addToCart(cartItem);
    calculateCartPrice();
    ToastAndroid.showWithGravity(
      MESSAGES.SUCCESS.ITEM_ADDED_TO_CART(cartItem.name),
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const renderCoffeeItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.push(SCREENS.DETAIL, {
          index: item.index,
          id: item.id,
          type: item.type,
        });
      }}>
      <ProductCard product={item} onPressHandler={addToCartHandler} />
    </TouchableOpacity>
  );

  const renderEmptyCoffeeList = () => (
    <View className="w-[90vw] justify-center items-center py-[80px]">
      <Text className="text-2xl font-poppinsSemiBold color-primary-lightGrey mb-2">
        No Coffee Available!
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar for setting background color */}
      <StatusBar backgroundColor={colors.primary.black} />

      <ScrollView
        contentContainerStyle={tw`flex-grow-1`}
        showsVerticalScrollIndicator={false}>

        {/* App Header */}
        <HeaderBar title={CONSTANTS.APP_NAME} />

        {/* Welcome Message */}
        <Text className="text-3xl font-poppinsSemiBold color-primary-white pl-6 mt-2">
          Find the best{"\n"}coffee for you
        </Text>

        {/* Search Bar */}
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchCoffee={searchCoffee}
          onResetSearch={resetSearchCoffee}
        />

        {/* Coffee Categories */}
        <CategoryScroller
          categories={categories}
          categoryIndex={categoryIndex.index}
          onCategoryChange={handleCategoryChange}
        />

        {/* Coffee Products */}
        <FlatList
          horizontal
          data={sortedCoffee}
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-5 py-5 px-7`}
          keyExtractor={item => item.id}
          renderItem={(item) =>
            renderCoffeeItem(item)
          }
          ListEmptyComponent={
            renderEmptyCoffeeList()
          }
        />

        {/* Section Title for Coffee Beans */}
        <Text className="text-2xl font-poppinsMedium color-primary-lightGrey pl-7 mt-2">
          Coffee Beans
        </Text>

        {/* Coffee Beans List */}
        <FlatList
          horizontal
          data={beanList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[tw`gap-5 py-5 px-7`, { marginBottom: tabBarHeight }]}
          keyExtractor={item => item.id}
          renderItem={(item) =>
            renderCoffeeItem(item)
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// UTILITY FUNCTIONS
// ->
const getCategoriesFromList = (coffeeList: any[]) => {
  const categoryCounts: Record<string, number> = {};

  coffeeList.forEach((item) => {
    if (!categoryCounts[item.name]) {
      categoryCounts[item.name] = 0;
    } else {
      categoryCounts[item.name]++;
    }
  });
  // Create categories list with "All" at the start
  const categories = [CONSTANTS.GENERAL.CATEGORY_ALL, ...Object.keys(categoryCounts)];
  return categories;
};

const getSortedCoffeeList = (seletedCategory: string, coffeeList: any[]) => {
  if (seletedCategory == CONSTANTS.GENERAL.CATEGORY_ALL) return coffeeList;

  const sortedList = coffeeList.filter(
    (coffeeCategory: any) => coffeeCategory.name == seletedCategory
  )
  return sortedList;
}

const scrollToTop = (listRef: React.RefObject<any>) => {
  if (listRef?.current) {
    const scrollValue = new Animated.Value(0);

    Animated.timing(scrollValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    listRef.current.scrollToOffset({
      animated: true,
      offset: 0,
    });
  }
};

export default HomeScreen;