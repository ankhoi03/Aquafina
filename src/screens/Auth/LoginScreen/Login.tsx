import { ImageBackground, StyleSheet, View, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { images, fonts } from '@assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors, displaySize } from '@utils'
import { AquafinaButton, Header, RegularText, AquafinaInput, LoginHeader } from '@components'
import LinearGradient from 'react-native-linear-gradient'
import { RootAuthParamLists } from '@navigation'
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginProps = NativeStackScreenProps<RootAuthParamLists, 'Login'>

const _Login: React.FC<LoginProps> = (props) => {
    const { navigation } = props;
    const [phone, setphone] = useState('')
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
    const handleNavgateInputOTP = () => {
        if (phone == '') {
            ToastAndroid.show('Vui lòng nhập số điện thoại', ToastAndroid.SHORT)
        }
        else {
            navigation.navigate('InputOTP', { phoneNumber: phone, type: true });
        }

    }

    const handleNavgateRegister = () => {
        navigation.navigate('Register');
    }
    const handleNavgateHome = () => {
        navigation.navigate('Main');
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
                <RegularText content='ĐĂNG NHẬP' style={styles.title} />
                <AquafinaInput keyboardType={'phone-pad'} placeHolder='Nhập số điện thoại của bạn' name='Số điện thoại' textInputStyle={phoneInputStyle} value={phone} onChangetext={handleInputPhone}
                    viewStyle={styles.phoneInput} />
            </View>
        )
    }

    const _renderFooter = () => {
        return (
            <ImageBackground source={{ uri: images.background_bottom }} resizeMode="cover" style={styles.imageBackground}>
                <LinearGradient colors={[colors.white_opacity, colors.white]} style={styles.overlay}>
                    <AquafinaButton content='Đăng nhập' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleNavgateInputOTP} />

                    <RegularText content='Hoặc' style={styles.orText} />

                    <AquafinaButton content='Đăng ký' source={images.white_button} buttonStyle={styles.button} textStyle={styles.whiteContent} onPress={handleNavgateRegister} />
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
export const Login = React.memo(_Login)







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
    whiteContent: {
        color: colors.blue_dark
    },
    blueContent: {
        color: colors.white
    },
    orText: {
        fontFamily: fonts.svn_bold,
        fontSize: 14,
        marginVertical: 2
    },
    title: {
        fontFamily: fonts.svn_bold,
        fontSize: 24,
        color: colors.blue_light,
        marginTop: 20
    },
    phoneInput: {
        marginTop: '8%'
    }

})