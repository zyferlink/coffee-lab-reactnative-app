import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import OrderItemCard from './OrderItemCard';

interface OrderHistoryCardProps {
    orderDate: string;
    orderPrice: string;
    orderItemList: any;
    navigationHandler: any;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
    orderDate,
    orderPrice,
    orderItemList,
    navigationHandler,
}) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
                {/* Order Date Time*/}
                <View>
                    <Text style={styles.headerTitle}>
                        Order Time
                    </Text>
                    <Text style={styles.headerSubtitle}>
                        {orderDate}
                    </Text>
                </View>
                {/* Order Payment Info*/}
                <View style={styles.priceContainer}>
                    <Text style={styles.headerTitle}>
                        Total Amount
                    </Text>
                    <Text style={styles.headerPrice}>
                        ${orderPrice}
                    </Text>
                </View>
            </View>
            {/* Order Items */}
            <View style={styles.listContainer}>
                {orderItemList.map((orderItem: any, index: any) => (
                    <TouchableOpacity
                        key={index.toString() + orderItem.id}
                        onPress={() => {
                            navigationHandler({
                                index: orderItem.index,
                                id: orderItem.id,
                                type: orderItem.type,
                            });
                        }}>
                        <OrderItemCard
                            type={orderItem.type}
                            name={orderItem.name}
                            imageLink={orderItem.imageLinkSquare}
                            specialIngredient={orderItem.specialIngredient}
                            prices={orderItem.prices}
                            itemPrice={orderItem.itemPrice}
                        />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        gap: SPACING.space10,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: SPACING.space20,
    },
    headerTitle: {
        fontFamily: FONT_FAMILY.poppinsSemiBold,
        fontSize: FONT_SIZE.size16,
        color: COLORS.primaryWhite,
    },
    headerSubtitle: {
        fontFamily: FONT_FAMILY.poppinsRegular,
        fontSize: FONT_SIZE.size16,
        color: COLORS.primaryWhite,
    },
    headerPrice: {
        fontFamily: FONT_FAMILY.poppinsMedium,
        fontSize: FONT_SIZE.size16,
        color: COLORS.primaryOrange,
    },
    priceContainer: {
        alignItems: "flex-end",
    },
    listContainer: {
        gap: SPACING.space20,
    },
})

export default OrderHistoryCard;
