import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBackgroundIcon from './GradientBackgroundIcon';
import { COLORS, FONT_SIZE, SPACING } from '../theme/theme';

interface ImageBackdropInfoProps {
  id: string;
  name: string;
  type: string;
  ingredients: string;
  specialIngredients: string;
  averageRating: number;
  ratingCount: string;
  roasted: string;
  favorite: boolean;
  toggleFavorite: any;
  imageLinkPortrait: ImageProps;
  enableBackHandler: boolean;
  backHandler?: any;
}

const ImageBackdropInfo: React.FC<ImageBackdropInfoProps> = ({
  id,
  name,
  type,
  ingredients,
  specialIngredients,
  averageRating,
  ratingCount: string,
  roasted,
  favorite,
  toggleFavorite,
  imageLinkPortrait,
  enableBackHandler,
  backHandler,
}) => {
  return (
    <View>
      <ImageBackground
        source={imageLinkPortrait}
        style={styles.itemBackgroundImage}>
        {enableBackHandler ? (
          <View style={styles.headerBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => backHandler()}>
              <GradientBackgroundIcon
                name="left"
                color={COLORS.primaryLightGrey}
                size={FONT_SIZE.size16} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, id, type)}>
              <GradientBackgroundIcon
                name="like"
                color={favorite ? COLORS.primaryRed : COLORS.primaryLightGrey}
                size={FONT_SIZE.size16} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.headerBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, id, type)}>
              <GradientBackgroundIcon
                name="like"
                color={favorite ? COLORS.primaryRed : COLORS.primaryLightGrey}
                size={FONT_SIZE.size16} />
            </TouchableOpacity>
          </View>
        )}

        <View
        style={styles.infoHeaderContainer}>

        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  itemBackgroundImage: {
    width: "100%",
    aspectRatio: 20 / 25,
    justifyContent: "space-between",
  },
  headerBarContainerWithBack: {
    padding: SPACING.space30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBarContainerWithoutBack: {
    padding: SPACING.space30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoHeaderContainer: {
    
  }
})

export default ImageBackdropInfo;