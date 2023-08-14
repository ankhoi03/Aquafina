import { Dimensions, Image, ImageStyle, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { colors, displaySize } from '@utils'
import { AppContext } from '@navigation'
import { images } from '@assets'

export interface HeaderProps {
    onPressLogin?: () => void
    onPressExtend?: () => void
}

const _Header: React.FC<HeaderProps> = (props) => {
    const { loginStatus, setLoginStatus } = useContext(AppContext);

    const handleLogout = () =>{
        setLoginStatus(false)
    }
    

    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={props?.onPressExtend}>
                <Image style={styles.icon} source={{ uri: images.icon_extend }} />
            </TouchableOpacity>


            <Image style={styles.logo} source={{ uri: images.logo_app }} />

            {loginStatus ? (
                <TouchableOpacity onPress={handleLogout}>
                    <Image style={styles.icon} source={{ uri: images.icon_logout }} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={props?.onPressLogin}>
                    <Image style={styles.icon} source={{ uri: images.icon_login }} />
                </TouchableOpacity>
            )
            }

        </View >
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
        alignItems: 'center',
        backgroundColor:colors.white
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