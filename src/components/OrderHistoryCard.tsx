import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
        <View>
            <Text>{orderDate}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})

export default OrderHistoryCard;
