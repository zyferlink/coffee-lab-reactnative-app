import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CustomIcon from './common/CustomIcon'
import { colors } from '../config/colors'
import { spacing } from '../config/dimensions'

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
                    colors={[colors.primary.grey, colors.primary.black]}
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
        borderColor: colors.secondary.darkGrey,
        borderRadius: spacing.space12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary.darkGrey,
        overflow: "hidden"
    },
    linearGradientBackgroud: {
        height: spacing.space36,
        width: spacing.space36,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default GradientBackgroundIcon