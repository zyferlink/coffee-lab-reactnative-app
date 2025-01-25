import { StyleSheet, View } from 'react-native'
import React from 'react'
import { SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import { borderRadius } from '../config/dimensions';

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
            style={[
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
        height: SPACING.space30,
        width: SPACING.space30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius.radius8
    }
})

export default BackgroundIcon;