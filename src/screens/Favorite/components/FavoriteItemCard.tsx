import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageBackdropInfo from '../../../components/common/ImageBackdropInfo';
import LinearGradient from 'react-native-linear-gradient';
import { fonts, fontSizes } from '../../../config/fonts';
import { colors } from '../../../config/colors';
import { borderRadius, spacing } from '../../../config/dimensions';
import { Product } from '../../../types/common/product';

interface FavoriteItemCardProps {
  product: Product;
  toggleFavorite: (id: string, type: string, isFavorite: boolean) => void;
}

const FavoriteItemCard: React.FC<FavoriteItemCardProps> = ({
  product,
  toggleFavorite,
}) => {
  return (
    <View style={styles.cardContainer}>
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
        style={styles.linearGradientContainer}>
        {/* Description Area */}
        <Text style={styles.descriptionTitle}>
          Description
        </Text>
        <Text style={styles.descriptionText}>
          {product.description}
        </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    borderRadius: borderRadius.radius28,
  },
  linearGradientContainer: {
    gap: spacing.space10,
    padding: spacing.space10,
  },
  descriptionTitle: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size16,
    color: colors.primary.white,
    marginBottom: spacing.space4,
  },
  descriptionText: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size14,
    color: colors.primary.white,
    letterSpacing: 0.5,
  },
})

export default FavoriteItemCard;