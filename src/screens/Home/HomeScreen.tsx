// React and React Native
import React from 'react'
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
// Configuration and components
import { useHomeViewModel } from './HomeViewModel';
import { colors } from '../../config/colors';
import { SCREENS } from '../../config/screenNames';
import { CONSTANTS } from '../../config/constants';
import { Product } from '../../types/common/product';
import HeaderBar from '../../components/common/HeaderBar';
import ProductCard from '../../components/common/ProductCard';
import SearchInput from './components/SearchInput';
import CategoryScroller from './components/CategoryScroller';
import tw from 'twrnc';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const {
    listRef, searchText, setSearchText, categories, categoryIndex, sortedCoffee,
    handleCategoryChange, searchCoffee, resetSearchCoffee, addToCartHandler, beanList,
  } = useHomeViewModel();

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

      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />

      {/*Vertical Scrollable Content */}
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={() => null}
        ListHeaderComponent={
          <>
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
              renderItem={(item) => renderCoffeeItem(item)}
              ListEmptyComponent={renderEmptyCoffeeList()}
            />
          </>
        }
        ListFooterComponent={
          <>
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
              renderItem={(item) => renderCoffeeItem(item)}
            />
          </>
        }
      />
    </SafeAreaView>
  );
}

export default HomeScreen;