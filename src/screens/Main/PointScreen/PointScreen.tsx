import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { AquafinaButton, CustomText, Footer, Header, RegularText } from '@components';
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';


type PointScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>
const _PointScreen: React.FC<PointScreenProps> = (props) => {
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
    return (
      <ScrollView>
        
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
    flex: 1
  },
})