import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface PriceProps {
    price: string;
    currency: string;
}

interface PaymentFooterProps {
    price: PriceProps;
    buttonTitle: string;
    buttonPressHandler: any;
    priceContainerStyle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
    price,
    buttonTitle,
    buttonPressHandler,
    priceContainerStyle,
}) => {
    return (
        <View className="flex-row items-center justify-between gap-[20px] px-[20px] bg-primary-blackTransparent">
            {/* Price View */}
            <View className={`items-center w-[100px] ${priceContainerStyle}`}>
                <Text className="font-poppinsMedium text-[16px] text-secondary-lightGrey">
                    Price
                </Text>
                <Text className="font-poppinsSemiBold text-[24px] text-primary-orange">
                    {`${price.currency} `}
                    <Text className="text-primary-white">
                        {price.price}
                    </Text>
                </Text>
            </View>

            {/* Action Button */}
            <TouchableOpacity
                className="flex-1 h-[56px] bg-primary-orange items-center justify-center 
                rounded-[28px] border border-0.5 border-secondary-lightGrey"
                onPress={() => buttonPressHandler()}>
                <Text className="font-poppinsSemiBold text-[18px] text-primary-white">
                    {buttonTitle}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentFooter;
