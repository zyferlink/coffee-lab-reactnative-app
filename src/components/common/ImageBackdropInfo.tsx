import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GradientBackgroundIcon from './GradientBackgroundIcon';
import CustomIcon from './CustomIcon';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';
import { Product } from '../../types/common/product';
import { iconSet } from '../../config/assets';
import { PRODUCT_TYPES } from '../../config/specialTypes';

interface ImageBackdropInfoProps {
  product: Product;
  enableBackHandler: boolean;
  toggleFavorite: (id: string, type: string, isFavorite: boolean) => void;
  backHandler?: any;
}

const ImageBackdropInfo: React.FC<ImageBackdropInfoProps> = ({
  product,
  enableBackHandler,
  toggleFavorite,
  backHandler,
}) => {
  return (
    <View>
      {/* Background Image */}
      <ImageBackground
        source={product.imageLinkPortrait}
        style={styles.itemBackgroundImage}>

        {/* Top App Bar */}
        {enableBackHandler ? (
          <View style={styles.headerBarContainerWithBack}>
            <TouchableOpacity
              onPress={() => backHandler()}>
              <GradientBackgroundIcon
                name={iconSet.left}
                color={colors.primary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(product.id, product.type, product.isFavorite)}>
              <GradientBackgroundIcon
                name={iconSet.like}
                color={product.isFavorite ? colors.primary.red : colors.primary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.headerBarContainerWithoutBack}>
            <TouchableOpacity
              onPress={() => toggleFavorite(product.id, product.type, product.isFavorite)}>
              <GradientBackgroundIcon
                name={iconSet.like}
                color={product.isFavorite ? colors.primary.red : colors.primary.lightGrey}
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
                  {product.name}
                </Text>
                <Text style={styles.itemSubtitleText}>
                  {product.specialIngredient}
                </Text>
              </View>

              {/* Header Property Container */}
              <View style={styles.itemPropertiesContainer}>
                {/* Property Views */}
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={product.type == PRODUCT_TYPES.BEAN ? iconSet.bean : iconSet.beans}
                    size={product.type == PRODUCT_TYPES.BEAN ? fontSizes.size18 : fontSizes.size24}
                    color={colors.primary.orange}
                  />
                  <Text
                    style={[styles.propertyFirstText,
                    { marginTop: product.type == PRODUCT_TYPES.BEAN ? spacing.space8 : 0 }]}>
                    {product.type}
                  </Text>
                </View>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={product.type == PRODUCT_TYPES.BEAN ? iconSet.location : iconSet.drop}
                    size={fontSizes.size16}
                    color={colors.primary.orange}
                  />
                  <Text style={styles.propertyLastText}>
                    {product.ingredients}
                  </Text>
                </View>
              </View>
            </View>

            {/* Header Container Row 2 */}
            <View style={styles.infoHeaderContainerRow}>
              <View style={styles.ratingContainer}>
                {/* Rating Views */}
                <CustomIcon
                  name={iconSet.star}
                  size={fontSizes.size20}
                  color={colors.primary.orange}
                />
                <Text style={styles.ratingText}>
                  {product.averageRating}
                </Text>
                <Text style={styles.ratingCountText}>
                  ({product.ratingsCount})
                </Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>
                  {product.roasted}
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