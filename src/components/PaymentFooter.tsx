import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';

interface PriceProps {
    price: string;
    currency: string;
}

interface PaymentFooterProps {
    price: PriceProps;
    buttonTitle: string;
    buttonPressHandler: any;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
    price,
    buttonTitle,
    buttonPressHandler,
}) => {
    return (
        <View style={styles.priceFooter}>
            <View style={styles.priceContainer}>
                <Text style={styles.priceTitle}>
                    Price
                </Text>
                <Text style={styles.priceText}>
                    {price.currency}
                    {" "}
                    <Text style={styles.price}>
                        {price.price}
                    </Text>
                </Text>
            </View>
            <TouchableOpacity
                style={styles.payButton}
                onPress={() => buttonPressHandler()}>
                <Text style={styles.buttonText}>
                    {buttonTitle}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    priceFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: SPACING.space20,
        padding: SPACING.space20,
    },
    priceContainer: {
        alignItems: "center",
        width: 100,
    },
    priceTitle: {
        fontFamily: FONT_FAMILY.poppinsMedium,
        fontSize: FONT_SIZE.size16,
        color: COLORS.secondaryLightGrey,
    },
    priceText: {
        fontFamily: FONT_FAMILY.poppinsSemiBold,
        fontSize: FONT_SIZE.size24,
        color: COLORS.primaryOrange,
    },
    price: {
        color: COLORS.primaryWhite,
    },
    payButton: {
        flex: 1,
        height: 68,
        backgroundColor: COLORS.primaryOrange,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: BORDER_RADIUS.radius25,
        borderWidth: 1,
    },
    buttonText: {
        fontFamily: FONT_FAMILY.poppinsSemiBold,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryWhite,
    },
})

export default PaymentFooter