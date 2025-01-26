// React and React Native
import React from 'react';
import { StyleSheet, View } from 'react-native';
// Absolute
import { borderRadius, spacing } from '../../config/dimensions';
// Relative
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
        <View style={[
            styles.iconBackground,
            { backgroundColor: backgroundColor }
        ]}>
            <CustomIcon
                name={name}
                color={color}
                size={size}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    iconBackground: {
        height: spacing.space30,
        width: spacing.space30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius.radius8
    }
})

export default BackgroundIcon;