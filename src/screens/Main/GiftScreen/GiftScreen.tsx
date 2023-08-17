import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootGiftParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { AquafinaButton, Footer, Header, PureGift, RegularText } from '@components';
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';



type GiftScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists> & NativeStackScreenProps<RootGiftParamLists>
const _GiftScreen: React.FC<GiftScreenProps> = (props) => {
  const { navigation } = props;
  const handleNavgateToLogin = () => {
    navigation.navigate('Auth');
  }
  const handleNavgateToWorldScreen = () => {
    navigation.navigate('Thế Giới Xanh');
  }
  const handleNavgateToGiftScreen = () => {
    navigation.navigate('Quà Tặng Xanh');
  }
  const handleNavgateToMapScreen = () => {
    navigation.navigate('Bản Đồ Xanh');
  }
  const handleNavgateToPointScreen = () => {
    navigation.navigate('Điểm Thưởng Xanh');
  }
  const handleNavgateToRankedScreen = () => {
    navigation.navigate('Bảng Xếp Hạng');
  }

  const handleNavgateToRule = () => {
    navigation.navigate('Rule');
  }

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const _renderHeader = () => {
    return (
      <Header onPressLogin={handleNavgateToLogin} onPressExtend={handleOpenDrawer} />
    )
  }

  const _renderBody = () => {
    return (
      <ScrollView>
        <PureGift hiddenButton={true} />

        <ImageBackground source={{ uri: images.gift_banner_1 }} style={styles.banner}>
          <AquafinaButton content='Tìm hiểu thêm' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleNavgateToRule}/>
        </ImageBackground>
        <View style={styles.banner_2_container}>
            <RegularText content='Thương hiệu kết hợp' style={styles.banner_2_title}/>
            <View style={styles.brand_container}>
              <Image source={{ uri: images.logo_repeet }} style={styles.brand}/>
              <Image source={{ uri: images.logo_headless }} style={styles.brand}/>
            </View>
        </View>

        <Footer navgateToWorldScreen={handleNavgateToWorldScreen} navgateToGiftScreen={handleNavgateToGiftScreen} navgateToMapScreen={handleNavgateToMapScreen} navgateToPointScreen={handleNavgateToPointScreen} navgateToRankedScreen={handleNavgateToRankedScreen} />


      </ScrollView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      {_renderHeader()}
      {_renderBody()}
    </SafeAreaView>
  )
}

export const GiftScreen = React.memo(_GiftScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: displaySize.width,
    height: displaySize.height * 0.8,
    alignItems: 'center',
    resizeMode: 'cover'
  },
  button: {
    paddingHorizontal: 20,
    top: '88%'
  },
  blueContent: {
    color: colors.white
  },
  banner_2_container:{
    backgroundColor: colors.world_bg,
    width: '100%',
    height: displaySize.height * 0.3,
    alignItems: 'center'
  },
  banner_2_title: {
    fontSize: 20,
    color: colors.blue_dark,
    fontFamily: fonts.svn_bold,
    marginTop: 20,
    marginBottom: 30
  },
  brand_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  },
  brand: {
    width: 100,
    height: 100
  }
})