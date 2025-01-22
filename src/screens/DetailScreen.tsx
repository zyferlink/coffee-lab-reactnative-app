import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/useStore'
import { COLORS } from '../theme/theme';
import ImageBackdropInfo from '../components/ImageBackdropInfo';

const DetailScreen = ({ navigation, route }: any) => {
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const selectedItem = useStore((state: any) =>
    route.params.type == "Coffee" ? state.coffeeList : state.beanList,
  )[route.params.index];

  const backHandler = () => {
    navigation.pop();
  }

  const toggleFavorite = (favorite: boolean, id: string, type: string) => {
    favorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  }

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        {/* Background Image */}
        
        <ImageBackdropInfo
          id={selectedItem.id}
          name={selectedItem.name}
          type={selectedItem.type}
          ingredients={selectedItem.ingredients}
          specialIngredients={selectedItem.special_ingredient}
          averageRating={selectedItem.average_rating}
          ratingCount={selectedItem.ratings_count}
          roasted={selectedItem.roasted}
          imageLinkPortrait={selectedItem.imagelink_portrait}
          favorite={selectedItem.favorite}
          toggleFavorite={toggleFavorite}
          enableBackHandler={true}
          backHandler={backHandler}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
  },
  scrollViewFlex: {
    flexGrow: 1,
  },
})

export default DetailScreen