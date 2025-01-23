import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/theme';

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
            colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
            style={styles.cardLinearGradientContainer}>
            <View>
                <View>
                    <Image
                        source={imageLink} />
                    <View>
                        <Text>{name}</Text>
                        <Text>{specialIngredient}</Text>
                    </View>
                </View>
                <View>
                    <Text>$ <Text>{itemPrice}</Text></Text>
                </View>

            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    cardLinearGradientContainer: {},
})

export default OrderItemCard;
