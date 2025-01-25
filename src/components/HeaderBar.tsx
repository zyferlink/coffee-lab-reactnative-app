import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GradientBackgroundIcon from './GradientBackgroundIcon';
import ProfilePicture from './ProfilePicture';
import { fonts, fontSizes } from '../config/fonts';
import { colors } from '../config/colors';
import { spacing } from '../config/dimensions';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> =
    ({ title }) => {
        return (
            <View
                style={styles.headerContainer}>
                <GradientBackgroundIcon
                    name="menu"
                    color={colors.primary.lightGrey}
                    size={fontSizes.size12}
                />
                <Text
                    style={styles.headerText}>
                    {title}
                </Text>
                <ProfilePicture />
            </View>
        )
    }

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: spacing.space24,
        paddingVertical: spacing.space16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontFamily: fonts.poppins.light,
        fontSize: fontSizes.size24,
        color: colors.secondary.lightGrey,
    }
})

export default HeaderBar