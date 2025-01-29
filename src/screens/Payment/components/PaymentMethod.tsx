import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { fontSizes } from '../../../config/fonts';
import { colors } from '../../../config/colors';
import { iconSet } from '../../../config/assets';
import CustomIcon from '../../../components/common/CustomIcon';

interface PaymentMethodProps {
    paymentMode: string
    name: string;
    icon: any;
    isIcon: boolean;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
    paymentMode,
    name,
    icon,
    isIcon,
}) => {
    return (
        <View
            className={`bg-primary-grey border border-2 rounded-full 
            ${paymentMode == name ? 'border-primary-orange' : 'border-primary-lightGrey'}`}>
            {isIcon ? (
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[colors.primary.grey, colors.primary.black]}
                    className="flex-row items-center justify-between py-3 px-5 rounded-full">
                    <View className="flex-row items-center gap-5">
                        <CustomIcon
                            name={iconSet.wallet}
                            color={colors.primary.orange}
                            size={fontSizes.size30} />
                        <Text className="font-poppinsSemiBold text-primary-white text-[16px]">
                            {name}
                        </Text>
                    </View>
                    <Text className="font-poppinsRegular text-primary-lightGrey text-xl">
                        $ 100.50
                    </Text>
                </LinearGradient>)
                :
                (<LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={[colors.primary.grey, colors.primary.black]}
                    className="flex-row items-center py-3 px-5 rounded-full">

                    <Image
                        source={icon}
                        className="w-[30px] h-[30px]"
                    />
                    <Text className="font-poppinsSemiBold text-primary-white text-[16px] px-5">
                        {name}
                    </Text>
                </LinearGradient>
                )}
        </View>
    );
};

export default PaymentMethod;