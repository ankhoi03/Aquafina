import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { colors, displaySize } from '@utils'
import { fonts, images } from '@assets'
import { AquafinaButton, CustomText, RegularText } from '@components'


interface PureMapProps {
    navigateToMapScreen?: () => void
}
const _PureMap: React.FC<PureMapProps> = (props) => {

    const { navigateToMapScreen } = props

    const textData = [
        { bold: true, content: 'Địa điểm' },
        { bold: false, content: ' đặt'},
    ];
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.slide} source={{ uri: images.pure_map_bg }}>
                <RegularText content='BẢN ĐỒ XANH' style={styles.title} />
                <AquafinaButton content='Khám phá ngay' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={navigateToMapScreen}/>
                <CustomText style={styles.address}>{textData}</CustomText>
            </ImageBackground>
        </View>
    )
}

export const PureMap = React.memo(_PureMap)

const styles = StyleSheet.create({
    container: {
        height: displaySize.height * 0.8
    },
    slide: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    button: {
        width: '40%',
        position: 'absolute',
        bottom: '4%'
    },
    blueContent: {
        color: colors.white
    },
    title: {
        color: colors.blue_light,
        fontSize: 24,
        fontFamily: fonts.svn_bold,
        marginTop: '5%'
    },
    address:{
        color: colors.blue_light,
        fontSize: 20,
    }
})