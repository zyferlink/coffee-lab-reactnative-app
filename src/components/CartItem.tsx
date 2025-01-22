import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';

interface CartItemProps {
    id: string;
    index: number;
    name: string;
    type: string;
    roasted: string;
    imageLinkSquare: ImageProps;
    specialIngredient: string;
    prices: any;
    incrementQuantityHandler: any;
    decrementQuantityHandler: any;
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    index,
    name,
    type,
    roasted,
    imageLinkSquare,
    specialIngredient,
    prices,
    incrementQuantityHandler,
    decrementQuantityHandler,
}) => {
    return (
        <View>
            {prices.length != 1 ?
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
                    style={styles.cardItemlinearGradient}>
                    {/* Top Row */}
                    <View style={styles.cartItemRow}>
                        <Image
                            source={imageLinkSquare}
                            style={styles.cartItemImage}
                        />
                        <View style={styles.cartItemInfo}>
                            <View>
                                <Text style={styles.cartItemTitle}>
                                    {name}
                                </Text>
                                <Text style={styles.cartItemSubtitle}>
                                    {specialIngredient}
                                </Text>
                            </View>

                            <View style={styles.cardItemRoastedContainer}>
                                <Text style={styles.cardItemRoastedText}>
                                    {roasted}
                                </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                :
                <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    cardItemlinearGradient: {
        flex: 1,
        gap: SPACING.space12,
        padding: SPACING.space12,
        borderRadius: BORDER_RADIUS.radius25,
    },
    cartItemRow: {
        flex: 1,
        flexDirection: "row",
        gap: SPACING.space12,
    },
    cartItemImage: {
        height: 130,
        width: 130,
        borderRadius: BORDER_RADIUS.radius25,
    },
    cartItemInfo: {
        flex: 1,
        paddingVertical: SPACING.space4,
        justifyContent: "space-between",
    },
    cartItemTitle: {
        fontFamily: FONT_FAMILY.poppinsMedium,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryWhite,
    },
    cartItemSubtitle: {
        fontFamily: FONT_FAMILY.poppinsRegular,
        fontSize: FONT_SIZE.size14,
        color: COLORS.secondaryLightGrey,
    },
    cardItemRoastedContainer: {
        height: 50,
        width: 120,
        borderRadius: BORDER_RADIUS.radius15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primaryDarkGrey,
    },
    cardItemRoastedText: {
        fontFamily: FONT_FAMILY.poppinsRegular,
        fontSize: FONT_SIZE.size12,
        color: COLORS.primaryWhite,
    }
})

export default CartItem