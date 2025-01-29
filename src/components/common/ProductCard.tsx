// React and React Native
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
// Third-party
import LinearGradient from 'react-native-linear-gradient';
// Configuration and components
import { colors } from '../../config/colors';
import { iconSet } from '../../config/assets';
import { fontSizes } from '../../config/fonts';
import { Product, ProductPrice } from '../../types/common/product';
import { CartItem } from '../../types/common/cartItem';
import CustomIcon from './CustomIcon';
import BackgroundIcon from '../specific/BackgroundIcon';


interface ProductCardProps {
    product: Product;
    onPressHandler: (cartItem: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onPressHandler
}) => {
    const selectedPrice = getPrice(product.prices);

    return (
        <LinearGradient
            colors={[colors.primary.grey, colors.primary.black]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="p-3 rounded-2xl"
        >
            {/* Image Background */}
            <ImageBackground
                source={product.imageLinkSquare}
                resizeMode="cover"
                className="w-[34vw] h-[34vw] aspect-square rounded-xl mb-4 overflow-hidden"
            >
                {/* Rating Container */}
                <View
                    className="absolute top-0 right-0 flex-row items-center justify-center 
                    bg-primary-blackTransparent gap-x-2 px-4 rounded-bl-xl rounded-tr-xl">
                    {/* Rating Icon */}
                    <CustomIcon
                        name={iconSet.star}
                        color={colors.primary.orange}
                        size={fontSizes.size14}
                    />
                    {/* Rating Text */}
                    <Text className="text-primary-white font-poppinsMedium text-sm leading-6">
                        {product.averageRating}
                    </Text>
                </View>
            </ImageBackground>

            {/* Coffee Name */}
            <Text className="text-primary-white text-lg font-poppinsSemiBold">
                {product.name}
            </Text>

            {/* Special Ingredient */}
            <Text className="text-primary-white font-poppinsLight text-xs">
                {product.specialIngredient}
            </Text>

            {/* Card Footer */}
            <View className="flex-row items-center justify-between mt-4">
                {/* Item Price */}
                <Text className="text-primary-orange font-poppinsSemiBold text-lg">
                    {`${selectedPrice.currency} `}
                    <Text className="text-primary-white">
                        {selectedPrice.price}
                    </Text>
                </Text>
                {/* Add Button */}
                <TouchableOpacity
                    onPress={() => {
                        const cartItem: CartItem = {
                            ...product,
                            prices: [{ ...selectedPrice, quantity: 1 }],
                        };
                        onPressHandler(cartItem);
                    }}
                >
                    <BackgroundIcon
                        name={iconSet.add}
                        color={colors.primary.white}
                        backgroundColor={colors.primary.orange}
                        size={fontSizes.size16}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const getPrice = (prices: ProductPrice[]): ProductPrice => {
    if (prices.length === 0) {
        // TODO: Handle the empty prices case
        return { currency: '$', price: '0.00', size: '' };
    }
    return prices[prices.length - 1];
};

export default ProductCard;
