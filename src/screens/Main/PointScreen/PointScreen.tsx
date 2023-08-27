import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import {  CustomText, Footer, Header, RegularText } from '@components';
import { colors } from '@utils';
import { fonts, images } from '@assets';
import {  useAppSelector } from '@data/store/RootStore';


type PointScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>
const _PointScreen: React.FC<PointScreenProps> = (props) => {
  const authSelector = useAppSelector((state) => state.auth);
  const CurrentUser = authSelector.currentUser;
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
    const thank = [
      { bold: true, content: 'CẢM ƠN BẠN ĐÃ THAM GIA CHIẾN DỊCH ' },
      { bold: true, contentStyle: styles.aquafina, content: '"SẢI BƯỚC PHONG CÁCH XANH"' },
      { bold: true, content: ' CÙNG' },
      { bold: true, contentStyle: styles.aquafina, content: ' AQUAFINA' },
    ]
    return (
      <ScrollView>
        <RegularText content='Thông tin người chơi' style={styles.title} />

        <View style={styles.avararContainer}>

          <Image source={{ uri: CurrentUser.avatar }} style={styles.avarar} />

          <TouchableOpacity>
            <Image source={{ uri: images.ic_camera }} style={styles.icon_camera} />
          </TouchableOpacity>

        </View>

        <View style={styles.infoContainer}>
          <RegularText content='Họ và tên' style={styles.subTitle} />
          <TextInput style={styles.input} value={CurrentUser.name} editable={false} />
        </View>

        <View style={styles.infoContainer}>
          <RegularText content='Số điện thoại' style={styles.subTitle} />
          <TextInput style={styles.input} value={CurrentUser.phone} editable={false} />
        </View>

        <ImageBackground source={{ uri: images.point_frame }} style={styles.frame}>
          <RegularText content='Số điểm tích lũy:' style={[styles.title, { marginVertical: -10, right: 10, marginTop: 50 }]} />
          <RegularText content={CurrentUser.score.toString()} style={styles.point} />
        </ImageBackground>

        <CustomText style={styles.thank}>{thank}</CustomText>
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

export const PointScreen = React.memo(_PointScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.svn_bold,
    color: colors.blue_dark,
    textAlign: 'center',
    marginVertical: 20,
  },
  avararContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10
  },
  avarar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  icon_camera: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 2,
    right: 2
  },
  infoContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    gap: 6
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fonts.svn_bold,
    color: colors.black_dark,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 6,
    backgroundColor: colors.grey_outline,
    paddingHorizontal: 10,
    fontFamily: fonts.svn_bold,
    fontSize: 16,
    color: colors.grey_dark,
    alignItems: 'center',
    marginStart: 5
  },
  frame: {
    width: '90%',
    height: 270,
    marginTop: 30,
    alignItems: 'center',
    resizeMode: 'contain',
    alignSelf: 'center',
    left: 15
  },
  point: {
    fontSize: 80,
    fontFamily: fonts.svn_bold,
    color: colors.orange_point,
    right: 10
  },
  thank: {
    fontSize: 20,
    color: colors.blue_400,
    marginVertical:100,
    marginHorizontal: 20
  },
  aquafina: {
    color: colors.blue_light,
    fontSize: 20
  }

})