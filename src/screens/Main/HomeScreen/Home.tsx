import {  StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AquafinaRanked, AquafinaSwiper, Footer, Header, PureGift, PureMap } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootGiftParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'

type HomeProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>& NativeStackScreenProps<RootGiftParamLists>
const _Home: React.FC<HomeProps> = (props) => {

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
        <AquafinaSwiper navigateToGreenWorld={handleNavgateToWorldScreen} navigateToRule={handleNavgateToRule}/>

        <AquafinaRanked navigateToLogin={handleNavgateToLogin} navigateToRankedScreen={handleNavgateToRankedScreen} />

        <PureGift navigateToGiftScreen={handleNavgateToGiftScreen} />

        <PureMap navigateToMapScreen={handleNavgateToMapScreen} />

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

export const Home = React.memo(_Home)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})