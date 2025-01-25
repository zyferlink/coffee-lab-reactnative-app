import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import { fonts } from '../config/fonts';

interface PaymentMethodProps {
    paymentMode: string
    name: string;
    icon: any;
    isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
    paymentMode,
    name,
    icon,
    isIcon,
}) => {
    return (
        <View
            style={[styles.paymentCardContainer, {
                borderColor:
                    paymentMode == name ?
                        COLORS.primaryOrange : COLORS.primaryGrey
            }]}>
            {isIcon ?
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
                    style={styles.linearGradientWallet}>
                    <View style={styles.walletRow}>
                        <CustomIcon
                            name={"wallet"}
                            color={COLORS.primaryOrange}
                            size={FONT_SIZE.size30} />
                        <Text style={styles.paymentTitle}>{name}</Text>
                    </View>
                    <Text style={styles.paymentPrice}>$ 100.50</Text>
                </LinearGradient>
                :
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
                    style={styles.linearGradientRegular}>

                    <Image
                        source={icon}
                        style={styles.paymentImage}
                    />
                    <Text style={styles.paymentTitle}>{name}</Text>
                </LinearGradient>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    paymentCardContainer: {
        borderRadius: BORDER_RADIUS.radius15 * 2,
        backgroundColor: COLORS.primaryGrey,
        borderWidth: 3,
    },
    linearGradientWallet: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SPACING.space12,
        paddingHorizontal: SPACING.space24,
        gap: SPACING.space24,
        borderRadius: BORDER_RADIUS.radius15 * 2,
    },
    linearGradientRegular: {
        flexDirection: "row",
        alignItems: "center",
        padding: SPACING.space12,
        paddingHorizontal: SPACING.space24,
        gap: SPACING.space24,
        borderRadius: BORDER_RADIUS.radius15 * 2,
    },
    walletRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space24,
    },
    paymentTitle: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: FONT_SIZE.size16,
        color: COLORS.primaryWhite,
    },
    paymentPrice: {
          fontFamily: fonts.poppins.regular,
        fontSize: FONT_SIZE.size20,
        color: COLORS.secondaryLightGrey,
    },
    paymentImage: {
        height: 30,
        width: 30,
    },
})

export default PaymentMethod;