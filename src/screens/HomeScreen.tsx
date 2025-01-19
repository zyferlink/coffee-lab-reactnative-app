import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useStore } from '../store/store'

const HomeScreen = () => {

  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.beanList);

  const [categories, setCategories] = useState([undefined]);
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