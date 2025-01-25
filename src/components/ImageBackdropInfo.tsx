import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBackgroundIcon from './GradientBackgroundIcon';
import CustomIcon from './CustomIcon';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';
import { borderRadius, spacing } from '../config/dimensions';

interface ImageBackdropInfoProps {
  id: string;
  name: string;
  type: string;
  ingredients: string;
  specialIngredient: string;
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
  specialIngredient,
  averageRating,
  ratingCount,
  roasted,
  favorite,
  toggleFavorite,
  imageLinkPortrait,
  enableBackHandler,
  backHandler,
}) => {
  return (
    <View>
      {/* Background Image */}
      <ImageBackground
        source={imageLinkPortrait}
        style={styles.itemBackgroundImage}>
        {/* Top App Bar */}
        {enableBackHandler ? (
          <View style={styles.headerBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => backHandler()}>
              <GradientBackgroundIcon
                name="left"
                color={colors.primary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, id, type)}>
              <GradientBackgroundIcon
                name="like"
                color={favorite ? colors.primary.red : colors.primary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.headerBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => toggleFavorite(favorite, id, type)}>
              <GradientBackgroundIcon
                name="like"
                color={favorite ? colors.primary.red : colors.primary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>
          </View>
        )}
        {/* Header Container */}
        <View
          style={styles.infoHeaderOuterContainer}>
          <View style={styles.infoHeaderInnerContainer}>
            {/* Header Container Row 1 */}
            <View style={styles.infoHeaderContainerRow}>
              {/* Header Title */}
              <View>
                <Text style={styles.itemTitleText}>
                  {name}
                </Text>
                <Text style={styles.itemSubtitleText}>
                  {specialIngredient}
                </Text>
              </View>
              {/* Header Property Container */}
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={type == "Bean" ? "bean" : "beans"}
                    size={type == "Bean" ? fontSizes.size18 : fontSizes.size24}
                    color={colors.primary.orange}
                  />
                  <Text
                    style={[styles.propertyFirstText,
                    { marginTop: type == "Bean" ? spacing.space8 : 0 }]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={type == "Bean" ? "location" : "drop"}
                    size={fontSizes.size16}
                    color={colors.primary.orange}
                  />
                  <Text style={styles.propertyLastText}>
                    {ingredients}
                  </Text>
                </View>
              </View>
            </View>
            {/* Header Container Row 2 */}
            <View style={styles.infoHeaderContainerRow}>
              <View style={styles.ratingContainer}>
                <CustomIcon
                  name={"star"}
                  size={fontSizes.size20}
                  color={colors.primary.orange}
                />
                <Text style={styles.ratingText}>
                  {averageRating}
                </Text>
                <Text style={styles.ratingCountText}>
                  ({ratingCount})
                </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>
                  {roasted}
                </Text>
              </View>
            </View>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  itemBackgroundImage: {
    width: "100%",
    aspectRatio: 21 / 25,
    justifyContent: "space-between",
  },
  headerBarContainerWithBack: {
    padding: spacing.space30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBarContainerWithoutBack: {
    padding: spacing.space30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  infoHeaderOuterContainer: {
    paddingVertical: spacing.space24,
    paddingHorizontal: spacing.space30,
    backgroundColor: colors.primary.blackTransparent,
    borderTopLeftRadius: borderRadius.radius40,
    borderTopRightRadius: borderRadius.radius40,
  },
  infoHeaderInnerContainer: {
    justifyContent: "space-between",
    gap: spacing.space16,
  },
  infoHeaderContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitleText: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size24,
    color: colors.primary.white,
  },
  itemSubtitleText: {
    fontFamily: fonts.poppins.medium,
    fontSize: fontSizes.size12,
    color: colors.primary.white,
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.space20,
  },
  propertyFirst: {
    height: 55,
    width: 55,
    justifyContent: "center",
    borderRadius: borderRadius.radius16,
    alignItems: "center",
    backgroundColor: colors.primary.black,
  },
  propertyFirstText: {
    fontFamily: fonts.poppins.medium,
    fontSize: fontSizes.size12,
    color: colors.primary.white,
  },
  propertyLastText: {
    fontFamily: fonts.poppins.medium,
    fontSize: fontSizes.size12,
    color: colors.primary.white,
    marginTop: spacing.space4,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: spacing.space10,
    alignItems: "center",
  },
  ratingText: {
    fontFamily: fonts.poppins.semiBold,
    fontSize: fontSizes.size18,
    color: colors.primary.white,
  },
  ratingCountText: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size12,
    color: colors.primary.white,
  },
  roastedContainer: {
    height: 55,
    width: 130,
    justifyContent: "center",
    borderRadius: borderRadius.radius16,
    alignItems: "center",
    backgroundColor: colors.primary.black,
  },
  roastedText: {
    fontFamily: fonts.poppins.regular,
    fontSize: fontSizes.size12,
    color: colors.primary.white,
  },
})

export default ImageBackdropInfo;