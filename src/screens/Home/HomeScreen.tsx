// React and React Native
import React, { useRef, useState } from 'react'
import {
  Animated, FlatList, ScrollView, StatusBar, StyleSheet,
  Text, ToastAndroid, TouchableOpacity, View
} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
// Configuration and components
import { colors } from '../../config/colors';
import { SCREENS } from '../../config/screenNames';
import { useStore } from '../../state/useStore'
import { fonts, fontSizes } from '../../config/fonts';
import { Product } from '../../types/common/product';
import { CartItem } from '../../types/common/cartItem';
import { spacing } from '../../config/dimensions';
import HeaderBar from '../../components/common/HeaderBar';
import ProductCard from '../../components/common/ProductCard';
import DimensionsUtil from '../../utils/dimensionsUtil';
import SearchInput from './components/SearchInput';
import CategoryScroller from './components/CategoryScroller';

const SCREEN_WIDTH = DimensionsUtil.getScreenWidth();

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
      `${cartItem.name} is Added to Cart`,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  return (
    <View
      style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>

        {/* Header Bar */}
        <HeaderBar title={"CoffeeLab"} />

        {/* Title Text */}
        <Text style={styles.titleText}>
          Find the best
          {"\n"}
          coffee for you
        </Text>

        {/* Search Input */}
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchCoffee={search => searchCoffee(search)}
          onResetSearch={resetSearchCoffee}
        />

        {/* Category Scroller */}
        <CategoryScroller
          categories={categories}
          categoryIndex={categoryIndex.index}
          onCategoryChange={index => handleCategoryChange(index)}
        />

        {/* Coffee Flatlist */}
        <FlatList
          horizontal
          data={sortedCoffee}
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push(SCREENS.DETAIL, {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <ProductCard
                  product={item}
                  onPressHandler={addToCartHandler}
                />
              </TouchableOpacity>
            );
          }}
          ListEmptyComponent={
            <View style={styles.emptyListContainer}>
              <Text style={styles.categoryText}>No Coffee Available!</Text>
            </View>
          }
        />

        {/* Title Text */}
        <Text style={styles.coffeeBeansTitle}>
          Coffee Beans
        </Text>

        {/* Beans Flatlist */}
        <FlatList
          horizontal
          data={beanList}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.flatListContainer, { marginBottom: tabBarHeight }]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push(SCREENS.DETAIL, {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <ProductCard
                  product={item}
                  onPressHandler={addToCartHandler}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  )
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
  const categories = ["All", ...Object.keys(categoryCounts)];
  return categories;
};

const getSortedCoffeeList = (seletedCategory: string, coffeeList: any[]) => {
  if (seletedCategory == "All") return coffeeList;

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


// STYLES
// ->
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: colors.primary.black,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  titleText: {
    fontSize: fontSizes.size28,
    fontFamily: fonts.poppins.semiBold,
    color: colors.primary.white,
    paddingStart: spacing.space24,
  },
  categoryText: {
    fontSize: fontSizes.size16,
    fontFamily: fonts.poppins.semiBold,
    color: colors.primary.lightGrey,
    marginBottom: spacing.space4,
  },
  flatListContainer: {
    gap: spacing.space20,
    paddingVertical: spacing.space20,
    paddingHorizontal: spacing.space30,
  },
  coffeeBeansTitle: {
    fontSize: fontSizes.size20,
    marginLeft: spacing.space30,
    marginTop: spacing.space8,
    fontFamily: fonts.poppins.medium,
    color: colors.primary.lightGrey,
  },
  emptyListContainer: {
    width: SCREEN_WIDTH - spacing.space30 * 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.space36 * 3,
  },
})

export default HomeScreen;