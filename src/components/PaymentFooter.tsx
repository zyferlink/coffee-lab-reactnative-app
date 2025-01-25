import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDER_RADIUS, SPACING } from '../theme/theme';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';

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
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size16,
        color: colors.secondary.lightGrey,
    },
    priceText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size24,
        color: colors.primary.orange,
    },
    price: {
        color: colors.primary.white,
    },
    payButton: {
        flex: 1,
        height: 68,
        backgroundColor: colors.primary.orange,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: BORDER_RADIUS.radius25,
        borderWidth: 1,
    },
    buttonText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.white,
    },
})

export default PaymentFooter