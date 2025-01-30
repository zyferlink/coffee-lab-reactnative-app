import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { colors } from '../../config/colors';
import { SCREENS } from '../../config/screenNames';
import { MESSAGES } from '../../config/messages';
import EmptyListAnimation from '../../components/common/EmptyListAnimation';
import HeaderBar from '../../components/common/HeaderBar';
import FavoriteItemCard from './components/FavoriteItemCard';
import { useFavoriteViewModel } from './FavoriteViewModel';

interface FavoriteScreenProps {
  navigation: any;
}

const FavoriteScreen: React.FC<FavoriteScreenProps> = ({ navigation }) => {
  const tabBarHeight = useBottomTabBarHeight();
  const { favoriteList, toggleFavorite, navigateToDetail } = useFavoriteViewModel(navigation);

  return (
    <SafeAreaView className="flex-1 bg-primary-black">
      {/* Status Bar */}
      <StatusBar backgroundColor={colors.primary.black} />
      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-grow`}>
        <View
          className="flex-1"
          style={{ marginBottom: tabBarHeight }}>
          <View className="flex-1">
            {/* Header Bar */}
            <HeaderBar title={SCREENS.FAVORITE} />
            {/* Favorite Items */}
            {favoriteList.length === 0 ? (
              <EmptyListAnimation title={MESSAGES.DEFAULTS.NO_FAVORITES} />
            ) : (
              <View className="px-5 gap-5">
                {favoriteList.map((item: any) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => navigateToDetail(item)}>
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
    </SafeAreaView>
  );
};

export default FavoriteScreen;
