import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
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
        <View className="gap-2.5">
            <View className="flex-row items-center justify-between gap-5">
                {/* Order Date Time*/}
                <View>
                    <Text className="font-poppinsSemiBold text-lg text-primary-white">
                        Order Time
                    </Text>
                    <Text className="font-poppinsRegular text-md text-primary-white">
                        {orderDate}
                    </Text>
                </View>
                {/* Order Payment Info*/}
                <View className="items-end">
                    <Text className="font-poppinsSemiBold text-lg text-primary-white">
                        Total Amount
                    </Text>
                    <Text className="font-poppinsMedium text-lg text-primary-orange">
                        ${orderPrice}
                    </Text>
                </View>
            </View>
            {/* Order Items */}
            <View className="gap-3">
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
    );
};

export default OrderHistoryCard;
