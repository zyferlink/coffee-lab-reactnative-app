import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../CustomIcon';
import BackgroundIcon from '../BackgroundIcon';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { borderRadius, spacing } from '../../config/dimensions';
import { BrewItem, Product, ProductPrice } from '../../types/productTypes';
import DimensionsUtil from '../../utils/dimensionsUtil';
import { iconSet } from '../../config/assets';

const CARD_WIDTH = DimensionsUtil.widthPercentage(32);

interface ProductCardProps {
    product: Product;
    onPressHandler: (brewItem: BrewItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    onPressHandler,
}) => {
    const selectedPrice = getPrice(product.prices);
    return (
        <LinearGradient
            colors={[colors.primary.grey, colors.primary.black]}
            style={styles.cardLinearGradientContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            {/* Image Background */}
            <ImageBackground
                source={product.imageLinkSquare}
                resizeMode="cover"
                style={styles.cardImageBackground}>
                {/* Rating Container */}
                <View
                    style={styles.cardRatingContainer}>
                    {/* Rating Icon */}
                    <CustomIcon
                        name={iconSet.star}
                        color={colors.primary.orange}
                        size={fontSizes.size14} />
                    {/* Rating Text */}
                    <Text
                        style={styles.cardRatingText}>
                        {product.averageRating}
                    </Text>
                </View>
            </ImageBackground>
            {/* Coffee Name */}
            <Text style={styles.cardTitle}>
                {product.name}
            </Text>
            {/* Special Ingredient */}
            <Text style={styles.cardSubtitle}>
                {product.specialIngredient}
            </Text>
            {/* Card Footer */}
            <View style={styles.cardFooterRow}>
                {/* Item Price */}
                <Text style={styles.cardPriceCurrency}>
                    {`${selectedPrice.currency} `}
                    <Text style={styles.cardPrice}>
                        {selectedPrice.price}
                    </Text>
                </Text>
                {/* Add Button */}
                <TouchableOpacity
                    onPress={() => {
                        const brewItem: BrewItem = {
                            ...product,
                            prices: [{ ...selectedPrice, quantity: 1 }]
                        };
                        onPressHandler(brewItem);
                    }}>
                    <BackgroundIcon
                        name={iconSet.add}
                        color={colors.primary.white}
                        backgroundColor={colors.primary.orange}
                        size={fontSizes.size16}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const getPrice = (prices: ProductPrice[]): ProductPrice => {
    if (prices.length === 0) {
        // TODO: Handle the empty prices case, | throw an error
        return { currency: 'USD', price: '0.00', size: '' }; 
    }
    const index = prices.length - 1;
    return prices[index];
}

const styles = StyleSheet.create({
    cardLinearGradientContainer: {
        padding: spacing.space16,
        borderRadius: borderRadius.radius28,
    },
    cardImageBackground: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: borderRadius.radius20,
        marginBottom: spacing.space16,
        overflow: "hidden",
    },
    cardRatingContainer: {
        flexDirection: "row",
        backgroundColor: colors.primary.blackTransparent,
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.space10,
        paddingHorizontal: spacing.space16,
        position: "absolute",
        borderBottomLeftRadius: borderRadius.radius20,
        borderTopRightRadius: borderRadius.radius20,
        top: 0,
        right: 0,
    },
    cardRatingText: {
        fontFamily: fonts.poppins.medium,
        fontSize: fontSizes.size14,
        color: colors.primary.white,
        lineHeight: 24,
    },
    cardTitle: {
        fontFamily: fonts.poppins.medium,
        fontSize: fontSizes.size16,
        color: colors.primary.white,
    },
    cardSubtitle: {
        fontFamily: fonts.poppins.light,
        fontSize: fontSizes.size10,
        color: colors.primary.white,
    },
    cardFooterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: spacing.space16,
    },
    cardPriceCurrency: {
        fontFamily: fonts.poppins.semiBold,
        fontSize: fontSizes.size18,
        color: colors.primary.orange,
    },
    cardPrice: {
        color: colors.primary.white,
    }
})

export default ProductCard;