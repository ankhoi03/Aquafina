import { StyleSheet, View, ImageBackground, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useMemo } from "react";
import { colors, displaySize } from '@utils'
import { AquafinaButton, RegularText } from '@components'
import { fonts, images } from '@assets'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Modal from 'react-native-modal';

interface Gift {
    content: string,
    image: string,
    description: string,
    price_active: string,
    price_inactive: string
}

interface PureGiftProps {
    navigateToGiftScreen?: () => void
    hiddenButton?: boolean
}


const sliderWidth = displaySize.width;
const itemWidth = Math.round(sliderWidth * 0.48);




const _PureGift: React.FC<PureGiftProps> = (props) => {

    const { navigateToGiftScreen, hiddenButton } = props

    const GiftList: Gift[] = [
        {
            content: 'Áo thời trang\nAquafina x Repeet\n(Đen)',
            image: images.aqf_gift_aothun_den,
            description: '1 áo được làm từ 7 chai nhựa',
            price_active: images.aqf_aothun_price_active,
            price_inactive: images.aqf_aothun_price_inactive
        },
        {
            content: 'Nón lưỡi trai\nAquafina x Repeat',
            image: images.aqf_gift_non,
            description: '1 mũ được làm từ 15 chai nhựa',
            price_active: images.aqf_non_price_active,
            price_inactive: images.aqf_non_price_inactive
        },
        {
            content: 'Túi tote\nAquafina x Repeat',
            image: images.aqf_gift_tui,
            description: '1 túi được làm từ 2 chai nhựa',
            price_active: images.aqf_tui_price_active,
            price_inactive: images.aqf_tui_price_inactive
        },
        {
            content: 'Áo thời trang\nAquafina x Repeet\n(Trắng)',
            image: images.aqf_gift_aothun_trang,
            description: '1 áo được làm từ 7 chai nhựa',
            price_active: images.aqf_aothun_price_active,
            price_inactive: images.aqf_aothun_price_inactive
        },
        {
            content: 'Vớ\nAquafina x Repeat',
            image: images.aqf_gift_vo,
            description: '1 vớ được làm từ 1 chai nhựa',
            price_active: images.aqf_vo_price_active,
            price_inactive: images.aqf_vo_price_inactive
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const isCarousel = useRef(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedGift, setSelectedGift] = useState<Gift>(GiftList[0]);

    const openModal = (gift: Gift) => {
        setSelectedGift(gift);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const renderItem = useMemo(() => ({ item, index }: { item: Gift; index: number }) => {
        const isActived = index === activeIndex;

        return (
            <>
                {
                    isActived ? (
                        <Pressable style={styles.carouselItemActive} onPress={() => openModal(item)}>
                            <View style={styles.cardItemActive}>
                                <Image source={{ uri: images.frame_gift_active }} style={styles.frameGift} />
                            </View>
                            <Image source={{ uri: item.image }} style={styles.itemImageActive} />
                            <RegularText content={item.content} style={styles.itemContentActive} />
                            <Image source={{ uri: item.price_active }} style={styles.itemPriceActive} />

                        </Pressable>
                    ) : (
                        <View style={styles.carouselItemInactive}>
                            <View style={styles.cardItemInactive}>

                                <Image source={{ uri: item.image }} style={styles.itemImageInactive} />
                                <RegularText content={item.content} style={styles.itemContentInactive} />
                                <Image source={{ uri: item.price_inactive }} style={styles.itemPriceInactive} />
                            </View>
                        </View>
                    )
                }
            </>
        )
    }, [activeIndex]);

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.slide} source={{ uri: images.pure_gift_bg }}>
                <RegularText content='QUÀ TẶNG XANH' style={styles.title} />

                <View style={styles.carousel}>
                    <Carousel
                        ref={isCarousel}
                        data={GiftList}
                        // @ts-ignore
                        renderItem={renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        onScrollIndexChanged={(index) => setActiveIndex(index)}
                        initialNumToRender={3}
                        itemHeight={300}
                        inactiveSlideScale={0.8}
                        inactiveSlideOpacity={1}
                    />
                    {
                        hiddenButton ? null : (
                            <AquafinaButton content='Khám phá ngay' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={navigateToGiftScreen} />
                        )
                    }
                    <Pagination dotsLength={GiftList.length} activeDotIndex={activeIndex} inactiveDotScale={1} dotStyle={{ backgroundColor: colors.blue_dark, marginHorizontal: -10 }} inactiveDotStyle={{ backgroundColor: colors.grey_dark }} />
                    <Modal
                        style={styles.modalContainer}
                        isVisible={isModalVisible}
                        onBackdropPress={closeModal}
                        onBackButtonPress={closeModal}>

                        <View style={styles.dialogContainer}>
                            <Image source={{ uri: images.frame_dialog }} style={styles.frameDialog} />
                            <TouchableOpacity onPress={closeModal}>
                                <Image source={{ uri: images.ic_x }} style={styles.icon} />
                            </TouchableOpacity>
                            <RegularText content='KHÁM PHÁ QUÀ TẶNG ĐƯỢC LÀM TỪ VẢI TÁI CHẾ CỦA AQUAFINA' style={styles.dialogTitle} />
                            <Image source={{ uri: selectedGift.image }} style={styles.dialogImage} />
                            <RegularText content={selectedGift.content} style={styles.dialogContent} />
                            <RegularText content={selectedGift.description} style={styles.dialogDescription} />
                        </View>

                    </Modal>
                </View>
            </ImageBackground>
        </View>
    )
}

export const PureGift = React.memo(_PureGift)

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
        paddingHorizontal: 20
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
    carousel: {
        position: 'absolute',
        bottom: 0,
        top: '30%',
        flex: 1,
        alignItems: 'center',
    },
    carouselItemActive: {
        width: itemWidth,
        height: 300,
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 3
    },
    cardItemActive: {
        backgroundColor: colors.blue_400,
        width: itemWidth,
        height: 230,
        borderRadius: 10,
        alignItems: 'center',
        bottom: 0,
        position: 'absolute'
    },
    carouselItemInactive: {
        width: itemWidth,
        height: 300,
        alignItems: 'center',
        paddingHorizontal: 3
    },
    cardItemInactive: {
        backgroundColor: colors.white,
        width: itemWidth,
        height: 230,
        borderRadius: 10,
        elevation: 8,
        alignItems: 'center',
        bottom: 0,
        position: 'absolute'
    },
    frameGift: {
        width: '95%',
        height: '55%',
        resizeMode: 'contain',
        position: 'absolute',
        opacity: 0.5,
        top: 0
    },
    itemImageActive: {
        width: 190,
        height: 190,
        resizeMode: 'contain'
    },
    itemContentActive: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.svn_bold,
        textAlign: 'center',
        height: 60,
    },
    itemPriceActive: {
        marginTop: 5,
        width: 90,
        height: 30,
        resizeMode: 'contain',
    },
    itemImageInactive: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    itemContentInactive: {
        color: colors.grey_dark,
        fontSize: 14,
        fontFamily: fonts.svn_bold,
        textAlign: 'center',
        height: 35,
    },
    itemPriceInactive: {
        marginTop: 5,
        width: 75,
        height: 25,
        resizeMode: 'contain',
    },
    modalContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogContainer: {
        width: 328,
        height: 460,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 8
    },
    icon: {
        width: 24,
        height: 24,
        top: 10,
        left: 142,
    },
    frameDialog: {
        width: '95%',
        aspectRatio: 1,
        position: 'absolute',
        top: 80,
        opacity: 0.5,
        resizeMode: 'contain',
        alignItems: 'center'
    },
    dialogTitle: {
        color: colors.blue_light,
        fontSize: 17,
        fontFamily: fonts.svn_bold,
        textAlign: 'center',
        marginTop: 15,
        marginHorizontal: 20,
        lineHeight: 21
    },
    dialogImage: {
        width: 240,
        height: 240,
        resizeMode: 'contain'
    },
    dialogContent: {
        color: colors.blue_dark,
        fontSize: 20,
        fontFamily: fonts.svn_bold,
        textAlign: 'center',
        marginTop: 5,
        height: 60,
        lineHeight: 20
    },
    dialogDescription: {
        color: colors.blue_dark,
        fontSize: 16,
        fontFamily: fonts.svn_regular,
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 20,
        lineHeight: 20
    },

})