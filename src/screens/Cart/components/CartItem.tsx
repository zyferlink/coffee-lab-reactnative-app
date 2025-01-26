// React and React Native
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Third-party
import LinearGradient from 'react-native-linear-gradient';
// Configuration and components
import { fonts, fontSizes } from '../../../config/fonts';
import { colors } from '../../../config/colors';
import { borderRadius, spacing } from '../../../config/dimensions';
import CustomIcon from '../../../components/common/CustomIcon';
import { BrewItem } from '../../../types/productTypes';
import { iconSet } from '../../../config/assets';

interface CartItemProps {
    brewItem: BrewItem,
    incrementQuantityHandler: (id: string, size: string) => void;
    decrementQuantityHandler: (id: string, size: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
    brewItem,
    incrementQuantityHandler,
    decrementQuantityHandler,
}) => {
    const hasMultiplePrices = brewItem.prices.length !== 1;
    return (
        <View>
            {/* Multiple and Single Item Views */}
            {hasMultiplePrices ? (
                <MultipleBrewItemView
                    brewItem={brewItem}
                    decrementQuantityHandler={decrementQuantityHandler}
                    incrementQuantityHandler={incrementQuantityHandler}
                />
            ) : (
                <SingleBrewItemView
                    brewItem={brewItem}
                    decrementQuantityHandler={decrementQuantityHandler}
                    incrementQuantityHandler={incrementQuantityHandler}
                />
            )}
        </View>
    )
};

const MultipleBrewItemView = ({
    brewItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    brewItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.primary.grey, colors.primary.black]}
        style={styles.cardItemlinearGradient}
    >
        {/* Header Row */}
        <BrewItemHeader brewItem={brewItem} />

        {/* Price Rows */}
        {brewItem.prices.map((priceItem: any, index: any) => (
            <PriceRow
                key={index.toString()}
                priceItem={priceItem}
                brewItem={brewItem}
                decrementQuantityHandler={decrementQuantityHandler}
                incrementQuantityHandler={incrementQuantityHandler}
            />
        ))}
    </LinearGradient>
);

const SingleBrewItemView = ({
    brewItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    brewItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[colors.primary.grey, colors.primary.black]}
        style={styles.cardItemlinearGradient}
    >
        <View style={styles.cartItemSingleView}>
            {/* Image */}
            <Image
                source={brewItem.imageLinkSquare}
                style={styles.cartItemSingleImage}
            />

            {/* Main Property Views */}
            <View style={styles.cartItemInfoSingle}>
                {/* Title Views */}
                <View>
                    <Text style={styles.cartItemTitle}>
                        {brewItem.name}
                    </Text>
                    <Text style={styles.cartItemSubtitle}>
                        {brewItem.specialIngredient}
                    </Text>
                </View>

                {/* Size and Price */}
                <View style={styles.cardItemSingleSizeView}>
                    <View style={styles.sizeBox}>
                        <Text
                            style={[
                                styles.sizeText,
                                {
                                    fontSize: brewItem.type === "Bean"
                                        ? fontSizes.size14 : fontSizes.size16,
                                },
                            ]}
                        >
                            {brewItem.prices[0].size}
                        </Text>
                    </View>
                    <Text style={styles.sizeCurrency}>
                        {`${brewItem.prices[0].currency} `}
                        <Text style={styles.sizePrice}>
                            {brewItem.prices[0].price}
                        </Text>
                    </Text>
                </View>

                {/* Action Items */}
                <View style={styles.cartItemSingleSizeValueContainer}>
                    <TouchableOpacity
                        style={styles.cartItemIcon}
                        onPress={() =>
                            decrementQuantityHandler(brewItem.id, brewItem.prices[0].size)
                        }
                    >
                        <CustomIcon
                            name={iconSet.minus}
                            color={colors.primary.white}
                            size={fontSizes.size10}
                        />
                    </TouchableOpacity>
                    <View style={styles.cartItemQuantityContainer}>
                        <Text style={styles.cartItemQuantityText}>
                            {brewItem.prices[0].quantity}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.cartItemIcon}
                        onPress={() =>
                            incrementQuantityHandler(brewItem.id, brewItem.prices[0].size)
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
        </View>
    </LinearGradient>
);

const BrewItemHeader = ({ brewItem }: { brewItem: BrewItem }) => (
    <View style={styles.cartItemRow}>
        {/* Item Image */}
        <Image
            source={brewItem.imageLinkSquare}
            style={styles.cartItemImage}
        />
        {/* Main Property Views */}
        <View style={styles.cartItemInfo}>
            {/* Title Views */}
            <View>
                <Text style={styles.cartItemTitle}>
                    {brewItem.name}
                </Text>
                <Text style={styles.cartItemSubtitle}>
                    {brewItem.specialIngredient}
                </Text>
            </View>
            {/* Roasted Level Text */}
            <View style={styles.cardItemRoastedContainer}>
                <Text style={styles.cardItemRoastedText}>
                    {brewItem.roasted}
                </Text>
            </View>
        </View>
    </View>
);

const PriceRow = ({
    priceItem,
    brewItem,
    decrementQuantityHandler,
    incrementQuantityHandler,
}: {
    priceItem: any;
    brewItem: any;
    decrementQuantityHandler: (id: string, size: string) => void;
    incrementQuantityHandler: (id: string, size: string) => void;
}) => (
    <View style={styles.cartItemSizeRowContainer}>

        {/* Size List */}
        <View style={styles.cartItemSizeValueContainer}>
            <View style={styles.sizeBox}>
                {/* Size Items */}
                <Text
                    style={[
                        styles.sizeText,
                        {
                            fontSize: brewItem.type === "Bean"
                                ? fontSizes.size14 : fontSizes.size16,
                        },
                    ]}
                >
                    {priceItem.size}
                </Text>
            </View>
            {/* Price Text */}
            <Text style={styles.sizeCurrency}>
                {`${priceItem.currency} `}
                <Text style={styles.sizePrice}>
                    {priceItem.price}
                </Text>
            </Text>
        </View>

        {/* Action Items */}
        <View style={styles.cartItemSizeValueContainer}>
            {/* Minus Button */}
            <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() => decrementQuantityHandler(brewItem.id, priceItem.size)}
            >
                <CustomIcon
                    name={iconSet.minus}
                    color={colors.primary.white}
                    size={fontSizes.size10}
                />
            </TouchableOpacity>
            {/* Quantity Text */}
            <View style={styles.cartItemQuantityContainer}>
                <Text style={styles.cartItemQuantityText}>
                    {priceItem.quantity}
                </Text>
            </View>
            {/* Add Button */}
            <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() => incrementQuantityHandler(brewItem.id, priceItem.size)}
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

const styles = StyleSheet.create({
    cardItemlinearGradient: {
        flex: 1,
        gap: spacing.space12,
        padding: spacing.space12,
        borderRadius: borderRadius.radius28,
    },
    cartItemRow: {
        flex: 1,
        flexDirection: "row",
        gap: spacing.space12,
    },
    cartItemImage: {
        height: 130,
        width: 130,
        borderRadius: borderRadius.radius28,
    },
    cartItemInfo: {
        flex: 1,
        paddingVertical: spacing.space4,
        justifyContent: "space-between",
    },
    cartItemTitle: {
        fontFamily: fonts.poppins.medium,
        fontSize: fontSizes.size18,
        color: colors.primary.white,
    },
    cartItemSubtitle: {
        fontFamily: fonts.poppins.regular,
        fontSize: fontSizes.size14,
        color: colors.secondary.lightGrey,
    },
    cardItemRoastedContainer: {
        height: 50,
        width: 120,
        borderRadius: borderRadius.radius16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary.darkGrey,
    },
    cardItemRoastedText: {
        fontFamily: fonts.poppins.regular,
        fontSize: fontSizes.size12,
        color: colors.primary.white,
    },
    cartItemSizeRowContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.space20,
        flexDirection: "row",
    },
    cartItemSizeValueContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    sizeBox: {
        height: 40,
        width: 100,
        backgroundColor: colors.primary.black,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius.radius10,
    },
    sizeText: {
        fontFamily: fonts.poppins.medium,
        color: colors.secondary.lightGrey,
    },
    sizeCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.orange,
    },
    sizePrice: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.white,
    },
    cartItemIcon: {
        backgroundColor: colors.primary.orange,
        padding: spacing.space12,
        borderRadius: borderRadius.radius10,
    },
    cartItemQuantityContainer: {
        backgroundColor: colors.primary.black,
        width: 60,
        borderRadius: borderRadius.radius10,
        borderWidth: 2,
        borderColor: colors.primary.orange,
        alignItems: "center",
        paddingVertical: spacing.space4,
        marginHorizontal: spacing.space4,
    },
    cartItemQuantityText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size16,
        color: colors.primary.white,
    },
    cartItemSingleView: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: borderRadius.radius28,
        padding: spacing.space2,
        gap: spacing.space12,
    },
    cartItemSingleImage: {
        height: 150,
        width: 140,
        borderRadius: borderRadius.radius28,
    },
    cartItemInfoSingle: {
        flex: 1,
        alignSelf: "stretch",
        justifyContent: "space-around",

    },
    cardItemSingleSizeView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    cartItemSingleSizeValueContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
})

export default CartItem;