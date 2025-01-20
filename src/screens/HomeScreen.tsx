import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import { useStore } from '../store/store'
import { ScreenContainer } from 'react-native-screens';
import { COLORS } from '../theme/theme';

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

const HomeScreen = () => {

  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.beanList);

  const [searchText, setSearchText] = useState(undefined);
  const [categories, setCategories] = useState(
    getCategoriesFromList(coffeeList)
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getSortedCoffeeList(categoryIndex.category, coffeeList)
  );

  const tabBarHeight = useBottomTabBarHeight();


  return (
    <View
    style={styles.ScreenContainer}>
      <StatusBar 
      backgroundColor={COLORS.primaryBlackHex}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  }
})

export default HomeScreen