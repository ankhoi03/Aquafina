import { ImageBackground, StyleSheet, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { images, fonts } from '@assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, displaySize } from '@utils'
import { AquafinaButton, RegularText, AquafinaInput, LoginHeader } from '@components'
import LinearGradient from 'react-native-linear-gradient'
import { RootAuthParamLists } from '@navigation'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RegisterProps = NativeStackScreenProps<RootAuthParamLists, 'Register'>

const _Register: React.FC<RegisterProps> = (props) => {
    const { navigation } = props;
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [nameInputStyle, setNameInputStyle] = useState({
        fontFamily: fonts.svn_regular,
        fontSize: 16,
        color: colors.grey_dark,
    })
    const [phoneInputStyle, setPhoneInputStyle] = useState({
        fontFamily: fonts.svn_regular,
        fontSize: 16,
        color: colors.grey_dark,
    })
    const handleInputPhone = (text: string) => {
        setphone(text)
        if (text) {
            setPhoneInputStyle({
                fontFamily: fonts.svn_bold,
                fontSize: 16,
                color: colors.grey_dark,
            })
        } else {
            setPhoneInputStyle({
                fontFamily: fonts.svn_regular,
                fontSize: 16,
                color: colors.grey_dark,
            })
        }
    }
    const handleInputName = (text: string) => {
        setname(text)
        if (text) {
            setNameInputStyle({
                fontFamily: fonts.svn_bold,
                fontSize: 16,
                color: colors.grey_dark,
            })
        } else {
            setNameInputStyle({
                fontFamily: fonts.svn_regular,
                fontSize: 16,
                color: colors.grey_dark,
            })
        }
    }
    const handleNavgateInputOTP = () => {
        if (phone == ''||name == '') {
            ToastAndroid.show('Vui lòng nhập số điện thoại', ToastAndroid.SHORT)
        }
        else {
            navigation.navigate('InputOTP', { phoneNumber: phone, type: false });
        }
    }


    const _renderHeader = () => {
        return (
            <LoginHeader />
        )
    }

    const _renderBody = () => {

        return (
            <View style={styles.body}>
                <Image source={{ uri: images.content_login }} style={styles.content} resizeMode='cover' />
                <RegularText content='ĐĂNG KÝ' style={styles.title} />
                <AquafinaInput placeHolder='Nhập họ và tên của bạn' name='Họ và tên' textInputStyle={nameInputStyle} value={name} onChangetext={handleInputName}
                    viewStyle={styles.nameInput} />

                <AquafinaInput keyboardType={'phone-pad'} placeHolder='Nhập số điện thoại của bạn' name='Số điện thoại' textInputStyle={phoneInputStyle} value={phone} onChangetext={handleInputPhone}
                    viewStyle={styles.phoneInput} />
            </View>
        )
    }

    const _renderFooter = () => {
        return (
            <ImageBackground source={{ uri: images.background_bottom }} resizeMode="cover" style={styles.imageBackground}>
                <LinearGradient colors={[colors.white_opacity, colors.white]} style={styles.overlay}>
                    <AquafinaButton content='Đăng ký' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleNavgateInputOTP} />    
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
export const Register = React.memo(_Register)







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
        marginTop: 20
    },
    phoneInput: {
        marginTop: '2%'
    },
    nameInput: {
        marginTop: '8%'
    }

})