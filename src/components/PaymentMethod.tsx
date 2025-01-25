import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';
import { borderRadius } from '../config/dimensions';

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
                        colors.primary.orange : colors.primary.grey
            }]}>
            {isIcon ?
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[colors.primary.grey, colors.primary.black]}
                    style={styles.linearGradientWallet}>
                    <View style={styles.walletRow}>
                        <CustomIcon
                            name={"wallet"}
                            color={colors.primary.orange}
                            size={fontSizes.size30} />
                        <Text style={styles.paymentTitle}>{name}</Text>
                    </View>
                    <Text style={styles.paymentPrice}>$ 100.50</Text>
                </LinearGradient>
                :
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[colors.primary.grey, colors.primary.black]}
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
        borderRadius: borderRadius.radius16 * 2,
        backgroundColor: colors.primary.grey,
        borderWidth: 3,
    },
    linearGradientWallet: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: SPACING.space12,
        paddingHorizontal: SPACING.space24,
        gap: SPACING.space24,
        borderRadius: borderRadius.radius16 * 2,
    },
    linearGradientRegular: {
        flexDirection: "row",
        alignItems: "center",
        padding: SPACING.space12,
        paddingHorizontal: SPACING.space24,
        gap: SPACING.space24,
        borderRadius: borderRadius.radius16 * 2,
    },
    walletRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: SPACING.space24,
    },
    paymentTitle: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size16,
        color: colors.primary.white,
    },
    paymentPrice: {
          fontFamily: fonts.poppins.regular,
        fontSize: fontSizes.size20,
        color: colors.secondary.lightGrey,
    },
    paymentImage: {
        height: 30,
        width: 30,
    },
})

export default PaymentMethod;