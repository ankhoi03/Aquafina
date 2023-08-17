import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CustomText, Footer, Header, RegularText } from '@components';
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';


type MapScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>
const _MapScreen: React.FC<MapScreenProps> = (props) => {
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
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const _renderHeader = () => {
    return (
      <Header onPressLogin={handleNavgateToLogin} onPressExtend={handleOpenDrawer} />
    )
  }

  const _renderBody = () => {
    const textData = [
      { bold: true, content: 'Địa điểm' },
      { bold: false, content: ' đặt' },
    ];
    return (
      <ScrollView>
        <Image source={{ uri: images.map_banner_1 }} style={styles.banner} />
        <ImageBackground style={styles.banner} source={{ uri: images.map_banner_2 }}>
          <RegularText content='BẢN ĐỒ XANH' style={styles.title} />
          <CustomText style={styles.address}>{textData}</CustomText>
        </ImageBackground>
        <View style={styles.banner_3_container}>
          <RegularText content='ĐỐI TÁC' style={styles.banner_3_title} />
          <RegularText content='Aquafina hân hạnh đồng hành cùng các đối tác để lan tỏa phong cách Xanh.' style={styles.banner_3_content} />
          <Image source={{ uri: images.logo_partners }} style={styles.partner} />

          <RegularText content='Địa điểm đặt “Trạm tái sinh” trên bản đồ' style={[styles.banner_3_title, { fontSize: 16 }]} />
          <Image source={{ uri: images.map }} style={styles.map} />
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

export const MapScreen = React.memo(_MapScreen)

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
  title: {
    color: colors.blue_light,
    fontSize: 24,
    fontFamily: fonts.svn_bold,
    marginTop: '5%'
  },
  address: {
    color: colors.blue_light,
    fontSize: 20,
  },
  banner_3_container: {
    backgroundColor: colors.world_bg,
    width: '100%',
    alignItems: 'center'
  },
  banner_3_title: {
    fontSize: 20,
    color: colors.blue_dark,
    fontFamily: fonts.svn_bold,
    marginTop: 20,
    marginBottom: 10
  },
  banner_3_content: {
    fontSize: 14,
    color: colors.blue_dark,
    fontFamily: fonts.svn_regular,
    textAlign: 'center',
    marginHorizontal: 20
  },
  partner: {
    width: '95%',
    height: 200,
    resizeMode: 'contain'
  },
  map: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 20
  }
})