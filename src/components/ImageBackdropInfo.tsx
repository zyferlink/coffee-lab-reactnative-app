import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBackgroundIcon from './GradientBackgroundIcon';
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

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
                    size={type == "Bean" ? FONT_SIZE.size18 : FONT_SIZE.size24}
                    color={COLORS.primaryOrange}
                  />
                  <Text
                    style={[styles.propertyFirstText,
                    { marginTop: type == "Bean" ? SPACING.space8 : 0 }]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={type == "Bean" ? "location" : "drop"}
                    size={FONT_SIZE.size16}
                    color={COLORS.primaryOrange}
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
                  size={FONT_SIZE.size20}
                  color={COLORS.primaryOrange}
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
  infoHeaderOuterContainer: {
    paddingVertical: SPACING.space24,
    paddingHorizontal: SPACING.space30,
    backgroundColor: COLORS.primaryBlackTransparent,
    borderTopLeftRadius: BORDER_RADIUS.radius20 * 2,
    borderTopRightRadius: BORDER_RADIUS.radius20 * 2,
  },
  infoHeaderInnerContainer: {
    justifyContent: "space-between",
    gap: SPACING.space15,
  },
  infoHeaderContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitleText: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    fontSize: FONT_SIZE.size24,
    color: COLORS.primaryWhite,
  },
  itemSubtitleText: {
    fontFamily: FONT_FAMILY.poppinsMedium,
    fontSize: FONT_SIZE.size12,
    color: COLORS.primaryWhite,
  },
  itemPropertiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACING.space20,
  },
  propertyFirst: {
    height: 55,
    width: 55,
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.radius15,
    alignItems: "center",
    backgroundColor: COLORS.primaryBlack,
  },
  propertyFirstText: {
    fontFamily: FONT_FAMILY.poppinsMedium,
    fontSize: FONT_SIZE.size12,
    color: COLORS.primaryWhite,
  },
  propertyLastText: {
    fontFamily: FONT_FAMILY.poppinsMedium,
    fontSize: FONT_SIZE.size12,
    color: COLORS.primaryWhite,
    marginTop: SPACING.space4,
  },
  ratingContainer: {
    flexDirection: "row",
    gap: SPACING.space10,
    alignItems: "center",
  },
  ratingText: {
    fontFamily: FONT_FAMILY.poppinsSemiBold,
    fontSize: FONT_SIZE.size18,
    color: COLORS.primaryWhite,
  },
  ratingCountText: {
    fontFamily: FONT_FAMILY.poppinsRegular,
    fontSize: FONT_SIZE.size12,
    color: COLORS.primaryWhite,
  },
  roastedContainer: {
    height: 55,
    width: 130,
    justifyContent: "center",
    borderRadius: BORDER_RADIUS.radius15,
    alignItems: "center",
    backgroundColor: COLORS.primaryBlack,
  },
  roastedText: {
    fontFamily: FONT_FAMILY.poppinsRegular,
    fontSize: FONT_SIZE.size12,
    color: COLORS.primaryWhite,
  },
})

export default ImageBackdropInfo;