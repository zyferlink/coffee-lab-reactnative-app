import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../theme/theme';
import GradientBackgroundIcon from './GradientBackgroundIcon';
import ProfilePicture from './ProfilePicture';

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
                    color={COLORS.primaryLightGrey}
                    size={FONT_SIZE.size12}
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
        paddingHorizontal: SPACING.space24,
        paddingVertical: SPACING.space16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerText: {
        fontFamily: FONT_FAMILY.poppinsLight,
        fontSize: FONT_SIZE.size24,
        color: COLORS.secondaryLightGrey,
    }
})

export default HeaderBar