import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import GradientIconBG from './GradientIconBG';
import CustomIcon from './CustomIcon';
import { fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
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
        className="w-full aspect-[21/25] justify-between"
      >

        {/* Top App Bar */}
        {enableBackHandler ? (
          <View className="p-[30px] flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => backHandler()}>
              <GradientIconBG
                name={iconSet.left}
                color={colors.secondary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => toggleFavorite(product.id, product.type, product.isFavorite)}>
              <GradientIconBG
                name={iconSet.like}
                color={product.isFavorite ? colors.primary.red : colors.secondary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>
          </View>
        ) : (
          <View className="p-[30px] flex-row items-center justify-end">
            <TouchableOpacity
              onPress={() => toggleFavorite(product.id, product.type, product.isFavorite)}>
              <GradientIconBG
                name={iconSet.like}
                color={product.isFavorite ? colors.primary.red : colors.secondary.lightGrey}
                size={fontSizes.size16} />
            </TouchableOpacity>
          </View>
        )}

        {/* Header Container */}
        <View className="py-[24px] px-[30px] bg-primary-blackTransparent rounded-tl-[40px] rounded-tr-[40px]">
          <View className="justify-between gap-[16px]">
            
            {/* Header Row 1 */}
            <View className="flex-row justify-between items-center">
              {/* Title */}
              <View>
                <Text className="font-poppinsSemiBold text-[24px] text-primary-white">
                  {product.name}
                </Text>
                <Text className="font-poppinsMedium text-[13px] text-primary-white">
                  {product.specialIngredient}
                </Text>
              </View>

              {/* Property Container */}
              <View className="flex-row items-center gap-[20px]">
                <View className="h-[55px] w-[55px] justify-center items-center bg-primary-black rounded-[16px]">
                  <CustomIcon
                    name={product.type === PRODUCT_TYPES.BEAN ? iconSet.bean : iconSet.beans}
                    size={product.type === PRODUCT_TYPES.BEAN ? fontSizes.size18 : fontSizes.size24}
                    color={colors.primary.orange}
                  />
                  <Text className="font-poppins-medium text-[12px] text-primary-white mt-2">
                    {product.type}
                  </Text>
                </View>
                <View className="h-[55px] w-[55px] justify-center items-center bg-primary-black rounded-[16px]">
                  <CustomIcon
                    name={product.type === PRODUCT_TYPES.BEAN ? iconSet.location : iconSet.drop}
                    size={fontSizes.size16}
                    color={colors.primary.orange}
                  />
                  <Text className="font-poppins-medium text-[12px] text-white mt-2">
                    {product.ingredients}
                  </Text>
                </View>
              </View>
            </View>

            {/* Header Row 2 */}
            <View className="flex-row justify-between items-center">
              {/* Rating */}
              <View className="flex-row gap-[10px] items-center">
                <CustomIcon
                  name={iconSet.star}
                  size={fontSizes.size20}
                  color={colors.primary.orange}
                />
                <Text className="font-poppins-semiBold text-[18px] text-primary-white">
                  {product.averageRating}
                </Text>
                <Text className="font-poppins-regular text-[12px] text-primary-white">
                  ({product.ratingsCount})
                </Text>
              </View>
              <View className="h-[55px] w-[130px] justify-center items-center bg-primary-black rounded-[16px]">
                <Text className="font-poppins-regular text-[12px] text-primary-white">
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

export default ImageBackdropInfo;
