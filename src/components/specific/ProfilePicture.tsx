import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../../config/assets'
import { colors } from '../../config/colors'
import { spacing } from '../../config/dimensions'

const ProfilePicture = () => {
    return (
        <View
            style={styles.imageContainer}>
            <Image
                source={images.avatarDefault}
                style={styles.image} />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        height: spacing.space36,
        width: spacing.space36,
        borderRadius: spacing.space12,
        borderWidth: 2,
        borderColor: colors.secondary.darkGrey,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    image: {
        height: spacing.space36,
        width: spacing.space36,
    }
})

export default ProfilePicture