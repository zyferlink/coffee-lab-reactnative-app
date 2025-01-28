import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';

interface PriceProps {
    price: string;
    currency: string;
}

interface PaymentFooterProps {
    price: PriceProps;
    buttonTitle: string;
    buttonPressHandler: any;
    priceContainerStyle: StyleProp<ViewStyle>;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
    price,
    buttonTitle,
    buttonPressHandler,
    priceContainerStyle,
}) => {
    return (
        <View style={styles.priceFooter}>
            {/* Price View */}
            <View style={StyleSheet.flatten(
                [styles.priceContainer, priceContainerStyle]
            )}>
                <Text style={styles.priceTitle}>
                    Price
                </Text>
                <Text style={styles.priceText}>
                    {`${price.currency} `}
                    <Text style={styles.price}>
                        {price.price}
                    </Text>
                </Text>
            </View>
            {/* Action Button */}
            <TouchableOpacity
                style={styles.payButton}
                onPress={() => buttonPressHandler()}>
                <Text style={styles.buttonText}>
                    {buttonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    priceFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: spacing.space20,
        paddingHorizontal: spacing.space20,
        backgroundColor: colors.primary.blackTransparent,
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
        height: 56,
        backgroundColor: colors.primary.orange,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius.radius28,
        borderWidth: 1,
    },
    buttonText: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.white,
    },
})

export default PaymentFooter;