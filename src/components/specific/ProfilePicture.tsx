import React from 'react'
import { Image, View } from 'react-native'
import { images } from '../../config/assets'

const ProfilePicture = () => {
    return (
        <View
            className="h-9 w-9 rounded-xl border-2 border-secondary-darkGrey 
            items-center justify-center overflow-hidden">
            <Image
                source={images.avatarDefault}
                className="h-full w-full" />
        </View>
    )
}

export default ProfilePicture;