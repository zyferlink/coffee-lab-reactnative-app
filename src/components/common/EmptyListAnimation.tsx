import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Third-party
import LottieView from 'lottie-react-native';
// Configuration and components
import { lottieAnimations } from '../../config/assets';
import { fonts, fontSizes } from '../../config/fonts';
import { colors } from '../../config/colors';

interface EmptyListAnimationProps {
    title: string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> = ({
    title
}) => {
    return (
        <View style={styles.emptyCartContainer}>
            {/* Animation View */}
            <LottieView
                source={lottieAnimations.coffeecup}
                style={styles.lottieStyle}
                autoPlay
                loop
            />
            {/* Title Text */}
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
        fontSize: fontSizes.size18,
        color: colors.primary.orange,
        textAlign: "center",
    },
})

export default EmptyListAnimation;