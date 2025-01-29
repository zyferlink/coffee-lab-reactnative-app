import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import OrderItemCard from './OrderItemCard';
import { OrderItem } from '../../../types/common/orderItem';

interface OrderHistoryCardProps {
    orderItem: OrderItem;
    navigationHandler: any;
}

const OrderHistoryCard: React.FC<OrderHistoryCardProps> = ({
    orderItem,
    navigationHandler,
}) => {
    return (
        <View className="gap-2.5">
            <View className="flex-row items-center justify-between gap-5">
                {/* Order Date Time*/}
                <View>
                    <Text className="font-poppinsSemiBold text-lg text-primary-white">
                        Order Time
                    </Text>
                    <Text className="font-poppinsRegular text-md text-primary-white">
                        {orderItem.orderDate}
                    </Text>
                </View>
                {/* Order Payment Info*/}
                <View className="items-end">
                    <Text className="font-poppinsSemiBold text-lg text-primary-white">
                        Total Amount
                    </Text>
                    <Text className="font-poppinsMedium text-lg text-primary-orange">
                        ${orderItem.totalPrice}
                    </Text>
                </View>
            </View>
            {/* Order Items */}
            <View className="gap-3">
                {orderItem.itemList.map((orderItem: any, index: any) => (
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
                            cartItem={orderItem}
                            itemPrice={orderItem.itemPrice}
                        />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    );
};

export default OrderHistoryCard;
