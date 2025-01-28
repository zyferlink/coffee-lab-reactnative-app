// React and React Native
import React from 'react';
import { View } from 'react-native';
// Configuration and components
import CustomIcon from '../common/CustomIcon';

interface BackgroundIconProps {
    name: string;
    color: string;
    size: number;
    backgroundColor: string;
}

const BackgroundIcon: React.FC<BackgroundIconProps> = ({
    name,
    color,
    size,
    backgroundColor,
}) => {
    return (
        <View
            style={{ backgroundColor: backgroundColor }}
            className="h-8 w-8 justify-center items-center rounded-lg">
            <CustomIcon
                name={name}
                color={color}
                size={size}
            />
        </View>
    )
}

export default BackgroundIcon;