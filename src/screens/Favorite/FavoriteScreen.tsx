import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useStore } from '../../state/useStore';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import HeaderBar from '../../components/common/HeaderBar';
import FavoriteItemCard from './components/FavoriteItemCard';
import { colors } from '../../config/colors';
import { spacing } from '../../config/dimensions';
import { SCREENS } from '../../config/screenNames';

const FavoriteScreen = ({ navigation, route }: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  const favoriteList = useStore((state: any) => state.favoriteList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const toggleFavorite = (id: string, type: string, isFavorite: boolean) => {
    isFavorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
  };

  return (
    <View style={styles.screenContainer}>
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Scrollable Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <View
          style={[styles.innerScrollView, { marginBottom: tabBarHeight }]}>
          <View
            style={styles.itemContainer}>
            {/* Header Bar */}
            <HeaderBar title={SCREENS.FAVORITE} />
            {/* Favorite Items */}
            {favoriteList.length == 0 ?
              (<EmptyListAnimation title={"No Favorites"} />)
              :
              (<View style={styles.listItemContainer}>
                {favoriteList.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      navigation.push(SCREENS.DETAIL,
                        {
                          index: item.index,
                          id: item.id,
                          type: item.type,
                        }
                      );
                    }}>
                    <FavoriteItemCard
                      product={item}
                      toggleFavorite={toggleFavorite}
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
    backgroundColor: colors.primary.black,
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
    paddingHorizontal: spacing.space20,
    gap: spacing.space20,
  },
})

export default FavoriteScreen;