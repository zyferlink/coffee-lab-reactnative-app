import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useStore } from '../store/useStore';
import { COLORS, SPACING } from '../theme/theme';
import EmptyListAnimation from '../components/EmptyListAnimation';
import HeaderBar from '../components/HeaderBar';
import FavoriteItemCard from '../components/FavoriteItemCard';

const FavoriteScreen = ({ navigation, route }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const favoriteList = useStore((state: any) => state.favoriteList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const toggleFavorite = (favorite: boolean, id: string, type: string) => {
    favorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={COLORS.primaryBlack} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.innerScrollView, { marginBottom: tabBarHeight }]}>
          <View
            style={styles.itemContainer}>
            {/* Header Bar */}
            <HeaderBar title={"Favorites"} />
            {/* Favorite Items */}
            {favoriteList.length == 0 ?
              (<EmptyListAnimation title={"No Favorites"} />)
              :
              (<View style={styles.listItemContainer}>
                {favoriteList.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      navigation.push("Details",
                        {
                          index: item.index,
                          id: item.id,
                          type: item.type,
                        }
                      );
                    }}>
                    <FavoriteItemCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      ingredients={item.ingredients}
                      specialIngredient={item.special_ingredient}
                      averageRating={item.average_rating}
                      ratingCount={item.ratings_count}
                      description={item.description}
                      roasted={item.roasted}
                      favorite={item.favorite}
                      toggleFavorite={toggleFavorite}
                      imageLink={item.imagelink_portrait}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              )}
          </View>
        </View>

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
  innerScrollView: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
  },
  listItemContainer: {
    paddingHorizontal: SPACING.space20,
    gap: SPACING.space20,
  },
})

export default FavoriteScreen;