import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from '../theme/theme';
import { fonts } from '../config/fonts';

interface OrderItemCardProps {
    type: string;
    name: string;
    imageLink: ImageProps;
    specialIngredient: string;
    prices: any;
    itemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
    type,
    name,
    imageLink,
    specialIngredient,
    prices,
    itemPrice,
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
            style={styles.cardLinearGradientContainer}>
            {/* Header Info Section */}
            <View
                style={styles.cardInfoContainer}>
                <View
                    style={styles.cardInfoImageContainer}>
                    {/* Header Image */}
                    <Image
                        source={imageLink}
                        style={styles.cardImage}
                    />
                    <View>
                        {/* Item Name */}
                        <Text style={styles.cardTitle}>
                            {name}
                        </Text>
                        {/* Special Ingredient */}
                        <Text style={styles.cardSubtitle}>
                            {specialIngredient}
                        </Text>
                    </View>
                </View>
                <View>
                    {/* Item Price */}
                    <Text style={styles.cardCurrency}>
                        {"$ "}
                        <Text style={styles.cardPrice}>
                            {itemPrice}
                        </Text>
                    </Text>
                </View>
            </View>
            {/* Detail Section */}
            {prices.map((priceItem: any, index: any) => (
                <View
                    key={index.toString()}
                    style={styles.cardTableRow}>
                    <View style={styles.cardTableRow}>
                        {/* PriceItems's Size */}
                        <View style={styles.cardBoxLeft}>
                            <Text style={[styles.itemPriceSize, {
                                fontSize: type == "Bean" ?
                                    FONT_SIZE.size14 : FONT_SIZE.size16
                            }]}>
                                {priceItem.size}
                            </Text>
                        </View>
                        {/* PriceItems's Price */}
                        <View style={styles.cardBoxRight}>
                            <Text style={styles.itemPriceCurrency}>
                                {`${priceItem.currency} `}
                                <Text style={styles.itemPrice}>
                                    {priceItem.price}
                                </Text>
                            </Text>
                        </View>
                    </View>
                    {/* PriceItems's Quantity */}
                    <View style={styles.cardTableRow}>
                        <Text style={styles.quantityTextItem}>
                            {`X `}
                            <Text style={styles.quantityText}>
                                {priceItem.quantity}
                            </Text>
                        </Text>
                        {/* PriceItems's Total Price */}
                        <Text style={styles.quantityTextItem}>
                            $ {(priceItem.quantity * priceItem.price).toFixed(2).toString()}
                        </Text>
                    </View>
                </View>
            ))
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardLinearGradientContainer: {
        gap: SPACING.space20,
        padding: SPACING.space20,
        borderRadius: BORDER_RADIUS.radius25,
    },
    cardInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardInfoImageContainer: {
        flexDirection: "row",
        gap: SPACING.space20,
        alignItems: "center",
    },
    cardImage: {
        height: 90,
        width: 90,
        borderRadius: BORDER_RADIUS.radius15,
    },
    cardTitle: {
        fontFamily: fonts.poppins.medium,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryWhite,
    },
    cardSubtitle: {
        fontFamily: fonts.poppins.regular,
        fontSize: FONT_SIZE.size12,
        color: COLORS.secondaryLightGrey,
    },
    cardCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: FONT_SIZE.size20,
        color: COLORS.primaryOrange,
    },
    cardPrice: {
        color: COLORS.primaryWhite,
    },
    cardTableRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardBoxLeft: {
        flex: 1,
        height: 45,
        backgroundColor: COLORS.primaryBlack,
        borderTopLeftRadius: BORDER_RADIUS.radius10,
        borderBottomLeftRadius: BORDER_RADIUS.radius10,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: COLORS.primaryGrey,
    },
    cardBoxRight: {
        flex: 1,
        height: 45,
        backgroundColor: COLORS.primaryBlack,
        borderTopRightRadius: BORDER_RADIUS.radius10,
        borderBottomRightRadius: BORDER_RADIUS.radius10,
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 1,
        borderLeftColor: COLORS.primaryGrey,
    },
    itemPriceSize: {
        fontFamily: fonts.poppins.medium,
        color: COLORS.secondaryLightGrey,
    },
    itemPriceCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryOrange,
    },
    itemPrice: {
        color: COLORS.primaryWhite,
    },
    quantityTextItem: {
        flex: 1,
        textAlign: "center",
        fontFamily: fonts.poppins.semiBold,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryOrange,
    },
    quantityText: {
        color: COLORS.primaryWhite,
    },
})

export default OrderItemCard;
