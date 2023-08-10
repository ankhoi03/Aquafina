import { Dimensions, Image, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { displaySize } from '@utils'
import { images } from '@assets'





const _LoginHeader: React.FC = () => {
    return (
        <View style={styles.header}>

            <TouchableOpacity >
                <Image style={styles.logo} source={{ uri: images.logo_app }} />
            </TouchableOpacity>

        </View>
    )
}

export const LoginHeader = React.memo(_LoginHeader)

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        height: displaySize.header,
        width: displaySize.width,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width: 84,
        height: 28,
    }
})