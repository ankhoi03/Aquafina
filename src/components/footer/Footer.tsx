import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, displaySize } from '@utils'
import { RegularText } from '@components'
import { fonts, images } from '@assets'

export interface FooterProps {
    navgateToWorldScreen?: () => void
    navgateToGiftScreen?: () => void
    navgateToMapScreen?: () => void
    navgateToPointScreen?: () => void
    navgateToRankedScreen?: () => void
  }
const _Footer: React.FC<FooterProps> = (props) => {
    const { navgateToWorldScreen, navgateToGiftScreen, navgateToMapScreen, navgateToPointScreen, navgateToRankedScreen } = props
    return (
        <View style={styles.container}>
            <Image source={{ uri: images.frame_dialog }} style={styles.frameFooter} />

            <TouchableOpacity style={styles.footerButton} onPress={navgateToWorldScreen}>
                <RegularText content='Thế Giới Xanh' style={styles.buttonContent} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={navgateToGiftScreen}>
                <RegularText content='Quà Tặng Xanh' style={styles.buttonContent} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={navgateToMapScreen}>
                <RegularText content='Bản Đồ Xanh' style={styles.buttonContent} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerButton} onPress={navgateToPointScreen}>
                <RegularText content='Điểm Thưởng Xanh' style={styles.buttonContent} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.footerButton, { borderBottomWidth: 1, borderBottomColor: colors.blue_border }]} onPress={navgateToRankedScreen}>
                <RegularText content='Bảng Xếp Hạng' style={styles.buttonContent} />
            </TouchableOpacity>

            <RegularText content='AQUAFINA là thương hiệu nước đóng chai của Pepsico-Suntory.' style={styles.description} />

            <RegularText content='Follow us' style={styles.description} />

            <View style={styles.contactView}>
                <TouchableOpacity>
                    <Image source={{ uri: images.ic_facebook }} style={{ width: 28, height: 28 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: images.ic_youtube }} style={{ width: 28, height: 28 }} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.errorView}>
                <Image source={{ uri: images.ic_error }} style={{ width: 22, height: 22 }} />
                <RegularText content='Báo Lỗi' style={styles.error} />
            </TouchableOpacity>

            <RegularText content='Copyright © 2022 Aquafina Vietnam' style={styles.copyright} />
        </View>
    )
}

export const Footer = React.memo(_Footer)

const styles = StyleSheet.create({
    container: {
        height: displaySize.height * 0.6,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    frameFooter: {
        width: '90%',
        aspectRatio: 1,
        position: 'absolute',
        top: 20,
        opacity: 0.4,
        resizeMode: 'contain'
    },
    footerButton: {
        width: '100%',
        height: 48,
        borderTopWidth: 1,
        borderTopColor: colors.blue_border,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContent: {
        color: colors.blue_400,
        fontSize: 16,
        fontFamily: fonts.svn_bold
    },
    description: {
        color: colors.blue_400,
        fontSize: 14,
        fontFamily: fonts.svn_bold,
        textAlign: 'center',
        marginHorizontal: 45,
        marginTop: 16,
        lineHeight: 20
    },
    contactView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10
    },
    errorView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        marginTop: 20
    },
    error: {
        color: colors.red_light,
        fontSize: 16,
        fontFamily: fonts.svn_regular,
        textAlign: 'center'
    },
    copyright: {
        color: colors.blue_400,
        fontSize: 14,
        fontFamily: fonts.svn_regular,
        textAlign: 'center',
        marginTop: 20
    }


})