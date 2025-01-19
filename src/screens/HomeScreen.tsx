import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useStore } from '../store/store'

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

const HomeScreen = () => {

  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.beanList);

  const [categories, setCategories] = useState(
    getCategoriesFromList(coffeeList)
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [searchText, setSearchText] = useState(undefined);
  const [sortedCoffee, setSortedCoffee] = useState(undefined);


  return (
    <View>
      <Text style={{ color: "black" }}>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen