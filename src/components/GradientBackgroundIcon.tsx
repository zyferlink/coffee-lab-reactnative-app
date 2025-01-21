import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'

interface GradientBackgroundIconProps {
    name: string,
    color: string,
    size: number,
}

const GradientBackgroundIcon: React.FC<GradientBackgroundIconProps> =
    ({ name, color, size }) => {
        return (
            <View
                style={styles.container}>
                <LinearGradient
                    colors={[COLORS.primaryGrey, COLORS.primaryBlack]}
                    style={styles.linearGradientBackgroud}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <CustomIcon
                        name={name}
                        color={color}
                        size={size}
                    />
                </LinearGradient>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGrey,
        borderRadius: SPACING.space12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondaryDarkGrey,
        overflow: "hidden"
    },
    linearGradientBackgroud: {
        height: SPACING.space36,
        width: SPACING.space36,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default GradientBackgroundIcon