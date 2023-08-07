import { ImageBackground, StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'
import { images } from '../../../../asset/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, displaySize } from '../../../resource'
import { fonts } from '../../../../asset'
import { AquafinaButton, Header, RegularText, AquafinaInput } from '../../../component'
import LinearGradient from 'react-native-linear-gradient'
import { RootAuthParamLists } from '../../../navigation'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SuccessProps = NativeStackScreenProps<RootAuthParamLists, 'Success'>

const _Success: React.FC<SuccessProps> = (props) => {
    const { navigation } = props;
   
    const handleNavgateLogin = () => {
        navigation.navigate('Login');
    }


    const _renderHeader = () => {
        return (
            <Header iconExtend={images.icon_home} iconLogo={images.logo_app} iconLogout={images.transparent} />
        )
    }

    const _renderBody = () => {

        return (
            <View style={styles.body}>
                <Image source={{ uri: images.content_login }} style={styles.content} resizeMode='cover' />
                <RegularText content='Đăng ký thành công' style={styles.title} />
                <RegularText content='Vui lòng đăng nhập để bắt đầu chương trình' style={styles.greyText} />
            </View>
        )
    }

    const _renderFooter = () => {
        return (
            <ImageBackground source={{ uri: images.background_bottom }} resizeMode="cover" style={styles.imageBackground}>
                <LinearGradient colors={[colors.white_opacity, colors.white]} style={styles.overlay}>
                    <AquafinaButton content='Đăng nhập' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleNavgateLogin} />    
                </LinearGradient>
            </ImageBackground>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            {_renderHeader()}
            {_renderBody()}
            {_renderFooter()}

        </SafeAreaView>
    )
}
export const Success = React.memo(_Success)







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    body: {
        width: displaySize.width,
        height: displaySize.body_login,
        alignItems: 'center'
    },
    content: {
        width: displaySize.width * 0.7,
        height: displaySize.height * 0.16
    },
    imageBackground: {
        width: displaySize.width,
        height: displaySize.footer_login,
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
        alignItems: 'center'
    },
    button: {
        width: '85%'
    },
   
    blueContent: {
        color: colors.white
    },
 
    title: {
        fontFamily: fonts.svn_bold,
        fontSize: 24,
        color: colors.blue_light,
        marginTop: 40
    },
    greyText: {
        fontSize: 14,
        color: colors.grey_dark,
        marginTop:16
    },

})