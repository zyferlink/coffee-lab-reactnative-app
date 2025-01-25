import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageBackdropInfo from './ImageBackdropInfo';
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS, SPACING } from '../theme/theme';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';

interface FavoriteItemCardProps {
  id: string;
  name: string;
  type: string;
  ingredients: string;
  specialIngredient: string;
  averageRating: number;
  ratingCount: string;
  description: string;
  roasted: string;
  favorite: boolean;
  toggleFavorite: any;
  imageLink: ImageProps;
}

const FavoriteItemCard: React.FC<FavoriteItemCardProps> = ({
  id,
  name,
  type,
  ingredients,
  specialIngredient,
  averageRating,
  ratingCount,
  description,
  roasted,
  favorite,
  toggleFavorite,
  imageLink,
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackdropInfo
        id={id}
        name={name}
        type={type}
        ingredients={ingredients}
        specialIngredient={specialIngredient}
        averageRating={averageRating}
        ratingCount={ratingCount}
        roasted={roasted}
        imageLinkPortrait={imageLink}
        favorite={favorite}
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
          {description}
        </Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    overflow: "hidden",
    borderRadius: BORDER_RADIUS.radius25,
  },
  linearGradientContainer: {
    gap: SPACING.space10,
    padding: SPACING.space10,
  },
  descriptionTitle: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size16,
    color: colors.primary.white,
    marginBottom: SPACING.space4,
  },
  descriptionText: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size14,
    color: colors.primary.white,
    letterSpacing: 0.5,
  },
})

export default FavoriteItemCard;