import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../config/colors';
import { CURRENCY, PRODUCT_TYPES } from '../../../config/specialTypes';
import { CartItem } from '../../../types/common/cartItem';

interface OrderItemCardProps {
    cartItem: CartItem;
    itemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
    cartItem,
    itemPrice,
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[colors.primary.grey, colors.primary.black]}
            className="gap-3 m-0.5 pl-1 pt-1 pr-1 pb-5 rounded-3xl">
            {/* Header Info Section */}
            <View
                className="flex-row items-center justify-between">
                <View
                    className="flex-row items-center gap-3">
                    {/* Header Image */}
                    <Image
                        source={cartItem.imageLinkSquare}
                        className="h-24 w-24 rounded-xl"
                    />
                    <View>
                        {/* Item Name */}
                        <Text className="font-poppinsMedium text-lg text-primary-white">
                            {cartItem.name}
                        </Text>
                        {/* Special Ingredient */}
                        <Text className="font-poppinsRegular text-sm text-secondary-lightGrey">
                            {cartItem.specialIngredient}
                        </Text>
                    </View>
                </View>
                <View>
                    {/* Item Price */}
                    <Text className="font-poppinsSemiBold text-xl text-primary-orange">
                        {`${CURRENCY.USD.symbol} `}
                        <Text className="text-primary-white">
                            {itemPrice}
                        </Text>
                    </Text>
                </View>
            </View>
            {/* Detail Section */}
            {cartItem.prices.map((priceItem: any, index: any) => (
                <View
                    key={index.toString()}
                    className="flex-row items-center justify-between">
                    <View className="flex-1 flex-row items-center justify-between">
                        {/* PriceItems's Size */}
                        <View
                            className="flex-1 h-11 bg-primary-black rounded-l-lg 
                            border-r border-primary-grey items-center justify-center">
                            <Text
                                className={`font-poppinsMedium text-secondary-lightGrey 
                                text-${cartItem.type == PRODUCT_TYPES.BEAN ? 'sm' : 'base'}`}>
                                {priceItem.size}
                            </Text>
                        </View>
                        {/* PriceItems's Price */}
                        <View
                            className="flex-1 h-11 bg-primary-black rounded-r-lg border-l 
                            border-primary-grey items-center justify-center">
                            <Text className="font-poppinsSemiBold text-lg text-primary-orange">
                                {`${priceItem.currency} `}
                                <Text className="text-primary-white">
                                    {priceItem.price}
                                </Text>
                            </Text>
                        </View>
                    </View>
                    {/* PriceItems's Quantity */}
                    <View className="flex-1 flex-row items-center justify-between">
                        <Text className="text-center font-poppinsSemiBold text-lg text-primary-orange  pl-6">
                            {`X `}
                            <Text className="text-primary-white">
                                {priceItem.quantity}
                            </Text>
                        </Text>
                        {/* PriceItems's Total Price */}
                        <Text className="text-center font-poppinsSemiBold text-lg text-primary-orange pr-2">
                            $ {(priceItem.quantity * priceItem.price).toFixed(2).toString()}
                        </Text>
                    </View>
                </View>
            ))
            }
        </LinearGradient>
    );
};

export default OrderItemCard;
