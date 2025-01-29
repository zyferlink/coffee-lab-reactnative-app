import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { lottieAnimations } from '../../config/assets';

interface EmptyListAnimationProps {
    title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({
    title
}) => {
    return (
        <View className="h-[95%] justify-center items-center">
            {/* Animation View */}
            <LottieView
                source={lottieAnimations.coffeecup}
                style={{ height: 300, width:300}}
                autoPlay
                loop
            />
            {/* Title Text */}
            <Text
                className="text-lg font-poppinsMedium text-primary-orange 
                text-center mt-4">
                {title}
            </Text>
        </View>
    );
};

export default EmptyListAnimation;