import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';
import { borderRadius, spacing } from '../config/dimensions';

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
            colors={[colors.primary.grey, colors.primary.black]}
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
                                    fontSizes.size14 : fontSizes.size16
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
        gap: spacing.space20,
        padding: spacing.space20,
        borderRadius: borderRadius.radius28,
    },
    cardInfoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardInfoImageContainer: {
        flexDirection: "row",
        gap: spacing.space20,
        alignItems: "center",
    },
    cardImage: {
        height: 90,
        width: 90,
        borderRadius: borderRadius.radius16,
    },
    cardTitle: {
        fontFamily: fonts.poppins.medium,
        fontSize: fontSizes.size18,
        color: colors.primary.white,
    },
    cardSubtitle: {
        fontFamily: fonts.poppins.regular,
        fontSize: fontSizes.size12,
        color: colors.secondary.lightGrey,
    },
    cardCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size20,
        color: colors.primary.orange,
    },
    cardPrice: {
        color: colors.primary.white,
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
        backgroundColor: colors.primary.black,
        borderTopLeftRadius: borderRadius.radius10,
        borderBottomLeftRadius: borderRadius.radius10,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 1,
        borderRightColor: colors.primary.grey,
    },
    cardBoxRight: {
        flex: 1,
        height: 45,
        backgroundColor: colors.primary.black,
        borderTopRightRadius: borderRadius.radius10,
        borderBottomRightRadius: borderRadius.radius10,
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 1,
        borderLeftColor: colors.primary.grey,
    },
    itemPriceSize: {
        fontFamily: fonts.poppins.medium,
        color: colors.secondary.lightGrey,
    },
    itemPriceCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.orange,
    },
    itemPrice: {
        color: colors.primary.white,
    },
    quantityTextItem: {
        flex: 1,
        textAlign: "center",
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.orange,
    },
    quantityText: {
        color: colors.primary.white,
    },
})

export default OrderItemCard;
