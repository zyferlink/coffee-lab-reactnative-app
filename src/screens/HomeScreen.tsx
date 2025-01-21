import { Animated, FlatList, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useRef, useState } from 'react'
import { useStore } from '../store/store'
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import CoffeeCard from '../components/CoffeeCard';

const HomeScreen = () => {
  const listRef: any = useRef<FlatList>();
  const tabBarHeight = useBottomTabBarHeight();
  const coffeeList = useStore((state: any) => state.CoffeeList);
  const beanList = useStore((state: any) => state.BeanList);
  const [searchText, setSearchText] = useState("");
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

  const handleCategoryChange = (index: number) => {
    listRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    })
    setCategoryIndex({
      index: index,
      category: categories[index]
    });
    setSortedCoffee([
      ...getSortedCoffeeList(categories[index], coffeeList),
    ]);
  }

  return (
    <View
      style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* Header Bar */}
        <HeaderBar title={"Header"} />
        {/* Title Text */}
        <Text style={styles.titleText}>
          Find the bean
          {"\n"}
          coffee for you
        </Text>
        {/* Search Input */}
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {/* Category Scroller */}
        <CategoryScroller
          categories={categories}
          categoryIndex={categoryIndex.index}
          onCategoryChange={handleCategoryChange}
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
                onPress={() => { }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  name={item.name}
                  type={item.type}
                  roasted={item.roasted}
                  imageLinkSquare={item.imagelink_square}
                  specialIngredient={item.special_ingredient}
                  averageRating={item.average_rating}
                  price={item.prices[2]}
                  onPressHandler={() => { }}
                />
              </TouchableOpacity>
            );
          }}
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
                onPress={() => { }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  name={item.name}
                  type={item.type}
                  roasted={item.roasted}
                  imageLinkSquare={item.imagelink_square}
                  specialIngredient={item.special_ingredient}
                  averageRating={item.average_rating}
                  price={item.prices[2]}
                  onPressHandler={() => { }}
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

// COMPONENTS
// ->
const SearchInput = (
  { searchText, setSearchText }:
    { searchText: string; setSearchText: (text: string) => void; }
) => {
  return (
    <View
      style={styles.inputContainer}>
      <TouchableOpacity
        onPress={() => {
        }}>
        <CustomIcon
          name="search"
          size={FONT_SIZE.size18}
          color={
            searchText.length > 0
              ? COLORS.primaryOrange
              : COLORS.primaryLightGrey
          }
          style={styles.inputIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={"Find your Coffee..."}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholderTextColor={COLORS.primaryLightGrey}
        style={styles.textInputContainer}
      />
      {
        searchText.length > 0
        ? (<TouchableOpacity>
          <CustomIcon 
          style={styles.inputIcon}
          name="close"
          size={FONT_SIZE.size16}
          color={COLORS.primaryLightGrey}/>

        </TouchableOpacity>) 
        : (<></>)
      }
    </View>
  );
};

const CategoryScroller = (
  { categories, categoryIndex, onCategoryChange }:
    {
      categories: any[];
      categoryIndex: number;
      onCategoryChange: (index: number) => void;
    }
) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryScrollViewContentContainer}>
      {
        categories.map((category, index) => (
          <View
            key={index.toString()}
            style={styles.categoryScrollViewContainer}>
            <TouchableOpacity
              onPress={() => onCategoryChange(index)}
              style={styles.categoryScrollViewItem}>
              <Text
                style={[
                  styles.categoryText,
                  categoryIndex == index ? { color: COLORS.primaryOrange } : {},
                ]}>
                {category}
              </Text>
              {categoryIndex == index
                ? <View style={styles.activeCategory} />
                : <></>
              }
            </TouchableOpacity>
          </View>
        ))
      }
    </ScrollView>
  );
};

// STYLES
// ->
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
  titleText: {
    fontSize: FONT_SIZE.size28,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    color: COLORS.primaryWhite,
    paddingLeft: SPACING.space24,
  },
  inputContainer: {
    flexDirection: "row",
    margin: SPACING.space24,
    borderRadius: BORDER_RADIUS.radius20,
    backgroundColor: COLORS.primaryDarkGrey,
    alignItems: "center",
  },
  inputIcon: {
    marginHorizontal: SPACING.space20,
  },
  textInputContainer: {
    flex: 1,
    height: SPACING.space20 * 3,
    fontFamily: FONT_FAMILY.poppinsMedium,
    fontSize: FONT_SIZE.size14,
    color: COLORS.primaryWhite,
  },
  categoryScrollViewContentContainer: {
    paddingHorizontal: SPACING.space20,
    marginBottom: SPACING.space20,
  },
  categoryScrollViewContainer: {
    paddingHorizontal: SPACING.space15,
  },
  categoryScrollViewItem: {
    alignItems: "center",
  },
  categoryText: {
    fontSize: FONT_SIZE.size16,
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    color: COLORS.primaryLightGrey,
    marginBottom: SPACING.space4,
  },
  activeCategory: {
    height: SPACING.space10,
    width: SPACING.space10,
    borderRadius: BORDER_RADIUS.radius10,
    backgroundColor: COLORS.primaryOrange,
  },
  flatListContainer: {
    gap: SPACING.space20,
    paddingVertical: SPACING.space20,
    paddingHorizontal: SPACING.space30,
  },
  coffeeBeansTitle: {
    fontSize: FONT_SIZE.size18,
    marginLeft: SPACING.space30,
    marginTop: SPACING.space20,
    fontFamily: FONT_FAMILY.poppinsMedium,
    color: COLORS.primaryLightGrey,
  }
})

export default HomeScreen