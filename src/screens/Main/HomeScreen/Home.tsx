import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AquafinaRanked, AquafinaSwiper, Header } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';

type HomeProps=NativeStackScreenProps<RootMainParamLists>
const _Home: React.FC<HomeProps> = (props) => {

  const { navigation } = props;

  const handleNavgateLogin = () => {
    navigation.navigate('Auth');
  }
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  }
  const _renderHeader = () => {
    return (
      <Header onPressLogin={handleNavgateLogin} onPressExtend={handleOpenDrawer}/>
    )
  }

  const _renderBody = () => {
    return (
      <ScrollView>
        <AquafinaSwiper/>
        
        <AquafinaRanked onPressLogin={handleNavgateLogin}/>

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