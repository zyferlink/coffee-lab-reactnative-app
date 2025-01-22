import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { BORDER_RADIUS, COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BackgroundIcon from './BackgroundIcon';

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
            colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
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
                        color={COLORS.primaryOrange}
                        size={FONT_SIZE.size14} />
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
                    onPressHandler({
                        id,
                        index,
                        name,
                        type,
                        roasted,
                        imageLinkSquare,
                        specialIngredient,
                        averageRating,
                        prices:[{...price, quantity:1}],
                    });
                }}>
                    <BackgroundIcon
                        name={"add"}
                        color={COLORS.primaryWhite}
                        backgroundColor={COLORS.primaryOrange}
                        size={FONT_SIZE.size16}
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardLinearGradientContainer: {
        padding: SPACING.space16,
        borderRadius: BORDER_RADIUS.radius25,
    },
    cardImageBackground: {
        width: CARD_WIDTH,
        height: CARD_WIDTH,
        borderRadius: BORDER_RADIUS.radius20,
        marginBottom: SPACING.space15,
        overflow: "hidden",
    },
    cardRatingContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.primaryBlackTransparent,
        alignItems: "center",
        justifyContent: "center",
        gap: SPACING.space10,
        paddingHorizontal: SPACING.space15,
        position: "absolute",
        borderBottomLeftRadius: BORDER_RADIUS.radius20,
        borderTopRightRadius: BORDER_RADIUS.radius20,
        top: 0,
        right: 0,
    },
    cardRatingText: {
        fontFamily: FONT_FAMILY.poppinsMedium,
        fontSize: FONT_SIZE.size14,
        color: COLORS.primaryWhite,
        lineHeight: 24,
    },
    cardTitle: {
        fontFamily: FONT_FAMILY.poppinsMedium,
        fontSize: FONT_SIZE.size16,
        color: COLORS.primaryWhite,
    },
    cardSubtitle: {
        fontFamily: FONT_FAMILY.poppinsLight,
        fontSize: FONT_SIZE.size10,
        color: COLORS.primaryWhite,
    },
    cardFooterRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SPACING.space15,
    },
    cardPriceCurrency: {
        fontFamily: FONT_FAMILY.poppinsSemiBold,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryOrange,
    },
    cardPrice: {
        color: COLORS.primaryWhite,
    }
})

export default CoffeeCard;