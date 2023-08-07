import { Dimensions, Image, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { displaySize } from '../../resource'



export interface HeaderProps {
    iconExtend: string
    iconLogo: string
    iconLogout?: string
    onPressExtend?: () => void
    onPressLogo?: () => void
    onPressLogout?: () => void
}

const _Header: React.FC<HeaderProps> = (props) => {
    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={props.onPressExtend}>
                <Image style={styles.icon} source={{ uri: props.iconExtend }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressLogo}>
                <Image style={styles.logo} source={{ uri: props.iconLogo }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={props.onPressLogout}>
                <Image style={styles.icon} source={{ uri: props?.iconLogout }} />
            </TouchableOpacity>

        </View>
    )
}

export const Header = React.memo(_Header)

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        height: displaySize.header,
        width: displaySize.width,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: 28,
        height: 28
    },
    logo: {
        width: 96,
        height: 32,
    }
})