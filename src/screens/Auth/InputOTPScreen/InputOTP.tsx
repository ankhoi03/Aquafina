import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images,fonts } from '@assets'
import { colors, displaySize } from '@utils'
import { AquafinaButton, CustomText, Header, LoginHeader, RegularText } from '@components'
import LinearGradient from 'react-native-linear-gradient'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootAuthParamLists, AppContext } from '@navigation'

type InputOTPProps = NativeStackScreenProps<RootAuthParamLists, 'InputOTP'>

const _inputOTP: React.FC<InputOTPProps> = (props) => {
    const { loginStatus, setLoginStatus } = useContext(AppContext);
    const { navigation, route } = props;

    const handleNavgateHome = () => {
        navigation.navigate('Main');
    }
    const phoneNumber = route.params?.phoneNumber;
    const type = route.params?.type;

    const resendOTPText = [
        { bold: false, contentStyle: styles.greyText, content: 'Mã sẽ được gửi trong vòng ', },
        { bold: true, contentStyle: styles.redText, content: '30 GIÂY', }
    ];
    const otpTextData = [
        { bold: false, contentStyle: styles.greyText, content: 'Một mã OTP vừa được gửi vào số ', },
        { bold: true, contentStyle: styles.greyText, content: phoneNumber, }
    ];
    const [display, setDisplay] = useState<"flex" | "none" | undefined>("flex");

    const [colorOTP, setColorOTP] = useState<string>(colors.black_dark);
    const [borderColorOTP, setBorderColorOTP] = useState<string>(colors.grey_outline);

    const codeOTP = "9999";
    const [code, setCode] = useState<string>("");
    const handleCheckOTP = () => {
        if (code != codeOTP) {
            setDisplay("none");
            setColorOTP(colors.red_light);
            setBorderColorOTP(colors.red_light);
            return false;
        } else {
            if (type) {
                setLoginStatus(true)
                handleNavgateHome()
            } else {
                navigation.navigate('Success');
            }

        }



    };

    const handleResendOTP = () => {
        setDisplay("flex");
        setColorOTP(colors.blue_dark);
        setBorderColorOTP(colors.grey_outline);
        setCode("");
    };


    //Render View 

    const _renderHeader = () => {
        return (
          <LoginHeader/>
        )
    }
    const _renderBody = () => {


        return (
            <View style={styles.body}>
                <Image source={{ uri: images.content_login }} style={styles.content} resizeMode='cover' />
                <RegularText content='NHẬP OTP' style={styles.title} />
                <CustomText style={{ marginTop: 20 }}>{otpTextData}</CustomText>
                <View style={styles.otpInputView}>
                    <OTPInputView
                        style={{ width: '56%', height: 50 }}
                        pinCount={4}
                        autoFocusOnLoad
                        codeInputFieldStyle={StyleSheet.flatten([
                            styles.otpStyleBase,
                            { color: colorOTP, borderColor: borderColorOTP },
                        ])}
                        code={code}
                        onCodeChanged={(code) => {
                            setCode(code);
                        }}
                        onCodeFilled={(code) => {
                            console.log(`Code is ${code}, you are good to go!`);
                            setCode(code);
                        }}
                        editable={true}
                    />
                </View>
            </View>
        )
    }
    const _renderFooter = () => {

        return (
            <ImageBackground source={{ uri: images.background_bottom }} resizeMode="cover" style={styles.imageBackground}>
                <LinearGradient colors={[colors.white_opacity, colors.white]} style={styles.overlay}>
                    <AquafinaButton content='Xác nhận' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleCheckOTP} />
                    <CustomText style={{ marginTop: 10, display: display }}>{resendOTPText}</CustomText>

                    <TouchableOpacity onPress={handleResendOTP}>
                        <RegularText content='Gửi lại mã' style={styles.resendText} />
                    </TouchableOpacity>
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
export const InputOTP = React.memo(_inputOTP)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        position: 'relative',
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
    greyText: {
        fontSize: 14,
        color: colors.grey_dark
    },
    redText: {
        fontSize: 14,
        color: colors.red_light
    },
    resendText: {
        fontSize: 14,
        color: colors.blue_dark,
        textDecorationLine: 'underline',
        marginTop: 5
    },
    otpInputView: {
        width: '100%',
        alignItems: 'center'
    },
    otpStyleBase: {
        marginTop: 30,
        width: 44,
        height: 44,
        borderWidth: 1.5,
        borderColor: colors.grey_outline,
        color: colors.blue_dark,
        fontSize: 18,
        fontFamily: fonts.svn_bold,
        borderRadius: 8,
    }
})