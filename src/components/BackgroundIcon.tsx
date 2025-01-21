import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BORDER_RADIUS, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';

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
        borderRadius: BORDER_RADIUS.radius8
    }
})

export default BackgroundIcon;