import React from 'react'
import { Text, View } from 'react-native'
import { colors } from '../../../config/colors';
import { Product } from '../../../types/common/product';
import ImageBackdropInfo from '../../../components/common/ImageBackdropInfo';
import LinearGradient from 'react-native-linear-gradient';

interface FavoriteItemCardProps {
  product: Product;
  toggleFavorite: (id: string, type: string, isFavorite: boolean) => void;
}

const FavoriteItemCard: React.FC<FavoriteItemCardProps> = ({
  product,
  toggleFavorite,
}) => {
  return (
    <View className="overflow-hidden rounded-3xl">
      <ImageBackdropInfo
        product={product}
        toggleFavorite={toggleFavorite}
        enableBackHandler={false}
        backHandler={() => { }}
      />

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.primary.grey, colors.primary.black]}
        className="gap-1 p-2.5">
        {/* Description Title */}
        <Text className="font-poppinsSemiBold text-lg text-primary-white mb-1">
          Description
        </Text>
        {/* Description Area */}
        <Text className="font-poppinsRegular text-sm text-primary-white tracking-wide mb-2">
          {product.description}
        </Text>
      </LinearGradient>
    </View>
  )
}

export default FavoriteItemCard;