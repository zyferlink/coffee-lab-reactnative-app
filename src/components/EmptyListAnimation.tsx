import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS, FONT_SIZE } from '../theme/theme';
import { lottieAnimations } from '../config/assets';
import { fonts } from '../config/fonts';

interface EmptyListAnimationProps {
    title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({ title }) => {
    return (
        <View style={styles.emptyCartContainer}>
            <LottieView
                source={lottieAnimations.coffeecup}
                style={styles.lottieStyle}
                autoPlay
                loop
            />
            <Text style={styles.lottieText}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyCartContainer: {
        flex: 0.7,
        justifyContent: "center",
    },
    lottieStyle: {
        height: 300,
    },
    lottieText: {
        fontFamily: fonts.poppins.medium,
        fontSize: FONT_SIZE.size18,
        color: COLORS.primaryOrange,
        textAlign:"center",
    },
})

export default EmptyListAnimation;