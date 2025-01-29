// React and React Native
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// Third-party
import LinearGradient from 'react-native-linear-gradient';
// Configuration and components
import { CartItem } from '../../../types/common/cartItem';
import { iconSet } from '../../../config/assets';
import { PRODUCT_TYPES } from '../../../config/specialTypes';
import { colors } from '../../../config/colors';
import { fontSizes } from '../../../config/fonts';
import CustomIcon from '../../../components/common/CustomIcon';

interface CartItemViewProps {
    cartItem: CartItem;
    incrementQuantityHandler: (id: string, size: string) => void;
    decrementQuantityHandler: (id: string, size: string) => void;
}

const CartItemView: React.FC<CartItemViewProps> = ({
    cartItem,
    incrementQuantityHandler,
    decrementQuantityHandler,
}) => {
    const hasMultiplePrices = cartItem.prices.length !== 1;

    return (
        <View>
            {/* Multiple and Single Item Views */}
            {hasMultiplePrices ? (
                <MultipleBrewItemView
                    cartItem={cartItem}
                    decrementQuantityHandler={decrementQuantityHandler}
                    incrementQuantityHandler={incrementQuantityHandler}
                />
            ) : (
                <SingleBrewItemView
                    cartItem={cartItem}
                    decrementQuantityHandler={decrementQuantityHandler}
                    incrementQuantityHandler={incrementQuantityHandler}
                />
            )}
        </View>
    );
};

const MultipleBrewItemView = ({
    cartItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    cartItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.primary.grey, colors.primary.black]}
        className="p-4 rounded-2xl space-y-3"
    >
        {/* Header Row */}
        <BrewItemHeader cartItem={cartItem} />

        {/* Price Rows */}
        {cartItem.prices.map((priceItem: any, index: any) => (
            <PriceRow
                key={index.toString()}
                priceItem={priceItem}
                cartItem={cartItem}
                decrementQuantityHandler={decrementQuantityHandler}
                incrementQuantityHandler={incrementQuantityHandler}
            />
        ))}
    </LinearGradient>
);

const SingleBrewItemView = ({
    cartItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    cartItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.primary.grey, colors.primary.black]}
        className="p-3 rounded-3xl flex-row items-center space-x-3"
    >
        {/* Image */}
        <Image source={cartItem.imageLinkSquare} className="h-36 w-36 rounded-2xl" />

        {/* Main Property Views */}
        <View className="flex-1 justify-around">
            {/* Title Views */}
            <View>
                <Text className="font-poppinsMedium text-lg text-primary-white">
                    {cartItem.name}
                </Text>
                <Text className="font-poppinsRegular text-sm text-secondary-lightGrey">
                    {cartItem.specialIngredient}
                </Text>
            </View>

            {/* Size and Price */}
            <View className="flex-row justify-between items-center py-2.5 pr-2">
                <View className="bg-primary-black w-24 h-10 rounded-xl justify-center items-center">
                    <Text
                        className={`${cartItem.type === PRODUCT_TYPES.BEAN ? 'text-sm' : 'text-base'
                            } font-poppinsMedium text-secondary-lightGrey`}
                    >
                        {cartItem.prices[0].size}
                    </Text>
                </View>
                <Text className="text-lg font-poppinsSemiBold text-primary-orange">
                    {`${cartItem.prices[0].currency} `}
                    <Text className="text-lg font-poppinsSemiBold text-primary-white">
                        {cartItem.prices[0].price}
                    </Text>
                </Text>
            </View>

            {/* Action Items */}
            <View className="flex-row justify-evenly items-center">
                <TouchableOpacity
                    className="bg-primary-orange p-3 rounded-md"
                    onPress={() =>
                        decrementQuantityHandler(cartItem.id, cartItem.prices[0].size)
                    }
                >
                    <CustomIcon
                        name={iconSet.minus}
                        color={colors.primary.white}
                        size={fontSizes.size10}
                    />
                </TouchableOpacity>
                <View
                    className="bg-primary-black w-16 h-9 rounded-md border border-1 border-primary-orange 
                    justify-center items-center mx-2">
                    <Text className="text-base font-poppinsSemiBold text-primary-white">
                        {cartItem.prices[0].quantity}
                    </Text>
                </View>
                <TouchableOpacity
                    className="bg-primary-orange p-3 rounded-md"
                    onPress={() =>
                        incrementQuantityHandler(cartItem.id, cartItem.prices[0].size)
                    }
                >
                    <CustomIcon
                        name={iconSet.add}
                        color={colors.primary.white}
                        size={fontSizes.size10}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </LinearGradient>
);

const BrewItemHeader = ({ cartItem }: { cartItem: CartItem }) => (
    <View className="flex-row items-center space-x-3">
        {/* Item Image */}
        <Image source={cartItem.imageLinkSquare} className="h-32 w-32 rounded-2xl mb-2" />
        {/* Main Property Views */}
        <View className="flex-1 justify-between">
            {/* Title Views */}
            <View>
                <Text className="font-poppinsSemiBold text-xl text-primary-white mb-0.5">
                    {cartItem.name}
                </Text>
                <Text className="font-poppinsRegular text-xs text-secondary-lightGrey mb-1">
                    {cartItem.specialIngredient}
                </Text>
            </View>
            {/* Roasted Level Text */}
            <View className="bg-primary-darkGrey w-28 h-12 rounded-lg justify-center items-center my-3">
                <Text className="text-xs font-poppinsRegular text-primary-white">
                    {cartItem.roasted}
                </Text>
            </View>
        </View>
    </View>
);

const PriceRow = ({
    priceItem,
    cartItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    priceItem: any;
    cartItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <View className="flex-row items-center justify-between">
        {/* Size & Price List */}
        <View className="flex-row items-center pt-1 pb-0.5">
            {/* Sizes */}
            <View className="bg-primary-black w-24 h-10 rounded-xl justify-center items-center">
                <Text
                    className={`${cartItem.type === PRODUCT_TYPES.BEAN ? 'text-sm' : 'text-base'} 
                    font-medium text-secondary-lightGrey`}
                >
                    {priceItem.size}
                </Text>
            </View>
            {/* Prices */}
            <Text className="text-lg font-poppinsSemiBold text-primary-orange ml-2">
                {` ${priceItem.currency} `}
                <Text className="text-lg font-poppinsSemiBold text-primary-white">
                    {priceItem.price}
                </Text>
            </Text>
        </View>

        {/* Action Items */}
        <View className="flex-row items-center space-x-2">
            <TouchableOpacity
                className="bg-primary-orange p-3 rounded-md"
                onPress={() => decrementQuantityHandler(cartItem.id, priceItem.size)}
            >
                <CustomIcon
                    name={iconSet.minus}
                    color={colors.primary.white}
                    size={fontSizes.size10}
                />
            </TouchableOpacity>
            <View className="bg-primary-black w-14 h-9 rounded-md border-2 border-primary-orange justify-center items-center">
                <Text className="text-base font-poppinsSemiBold text-primary-white">
                    {priceItem.quantity}
                </Text>
            </View>
            <TouchableOpacity
                className="bg-primary-orange p-3 rounded-md"
                onPress={() => incrementQuantityHandler(cartItem.id, priceItem.size)}
            >
                <CustomIcon
                    name={iconSet.add}
                    color={colors.primary.white}
                    size={fontSizes.size10}
                />
            </TouchableOpacity>
        </View>
    </View>
);

export default CartItemView;
