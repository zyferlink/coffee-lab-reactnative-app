import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import CustomIcon from './CustomIcon';
import { colors } from '../../config/colors';

interface GradientIconBGProps {
    name: string;
    color: string;
    size: number;
}

const GradientIconBG: React.FC<GradientIconBGProps> = ({
    name,
    color,
    size
}) => {
    return (
        <View
            className="border-2 border-secondary-darkGrey rounded-lg 
            items-center justify-center bg-secondary-darkGrey overflow-hidden">
            <LinearGradient
                colors={[colors.primary.grey, colors.primary.black]}
                style={tw`h-9 w-9 items-center justify-center`}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <CustomIcon
                    name={name}
                    color={color}
                    size={size}
                />
            </LinearGradient>
        </View>
    );
};

export default GradientIconBG;