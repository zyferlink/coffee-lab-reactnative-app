import React from 'react';
import { View, Text } from 'react-native';
import { fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';
import { iconSet } from '../../config/assets';
import GradientIconBG from './GradientIconBG';
import ProfilePicture from '../specific/ProfilePicture';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View className="px-6 py-4 flex-row items-center justify-between">
            <GradientIconBG
                name={iconSet.menu}
                color={colors.primary.lightGrey}
                size={fontSizes.size12}
            />
            <Text className="text-2xl font-poppinsLight text-secondary-lightGrey">
                {title}
            </Text>
            <ProfilePicture />
        </View>
    );
};

export default HeaderBar;