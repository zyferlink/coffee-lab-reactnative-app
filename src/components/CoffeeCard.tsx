import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BackgroundIcon from './BackgroundIcon';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';
import { borderRadius } from '../config/dimensions';

const CARD_WIDTH = Dimensions.get("window").width * 0.32;

interface CoffeeCardProps {
    id: string;
    index: number;
    name: string;
    type: string;
    roasted: string;
    imageLinkSquare: ImageProps;
    specialIngredient: string;
    averageRating: number;
    price: any;
    onPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
    id,
    index,
    name,
    type,
    roasted,
    imageLinkSquare,
    specialIngredient,
    averageRating,
    price,
    onPressHandler,
}) => {
    return (
        <LinearGradient
            colors={[colors.primary.grey, colors.primary.black]}
            style={styles.cardLinearGradientContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            {/* Image Background */}
            <ImageBackground
                source={imageLinkSquare}
                resizeMode="cover"
                style={styles.cardImageBackground}>
                {/* Rating Container */}
                <View
                    style={styles.cardRatingContainer}>
                    {/* Rating Icon */}
                    <CustomIcon
                        name={"star"}
                        color={colors.primary.orange}
                        size={fontSizes.size14} />
                    {/* Rating Text */}
                    <Text
                        style={styles.cardRatingText}>
                        {averageRating}
                    </Text>
                </View>
            </ImageBackground>
            {/* Coffee Name */}
            <Text style={styles.cardTitle}>
                {name}
            </Text>
            {/* Special Ingredient */}
            <Text style={styles.cardSubtitle}>
                {specialIngredient}
            </Text>
            {/* Card Footer */}
            <View style={styles.cardFooterRow}>
                {/* Item Price */}
                <Text style={styles.cardPriceCurrency}>
                    ${" "}
                    <Text style={styles.cardPrice}>
                        {price.price}
                    </Text>
                </Text>
                {/* Add Button */}
                <TouchableOpacity
                    onPress={() => {
                        onPressHandler(
                            id,
                            index,
                            name,
                            type,
                            roasted,
                            imageLinkSquare,
                            specialIngredient,
                            price,
                        );
                    }}>
                    <BackgroundIcon
                        name={"add"}
                        color={colors.primary.white}
                        backgroundColor={colors.primary.orange}
                        size={fontSizes.size16}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardLinearGradientContainer: {
        padding: SPACING.space16,
        borderRadius: borderRadius.radius28,
    },
    cardImageBackground: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: borderRadius.radius20,
        marginBottom: SPACING.space15,
        overflow: "hidden",
    },
    cardRatingContainer: {
        flexDirection: "row",
        backgroundColor: colors.primary.blackTransparent,
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING.space10,
        paddingHorizontal: SPACING.space15,
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
        marginTop: SPACING.space15,
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

export default CoffeeCard;