import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts, images } from '@assets'
import { colors } from '@utils'
import {  Header } from '@components'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootMainParamLists } from '@navigation'



type HomeProps = NativeStackScreenProps<RootMainParamLists, 'Home'>;

const _Home: React.FC<HomeProps> = (props) => {

  const { navigation } = props;

  const handleNavgateLogin = () => {
    navigation.navigate('Auth');
}

  const _renderHeader = () => {
    return (
      <Header iconExtend={images.icon_extend} iconLogo={images.logo_app} iconStatus={images.icon_login} onPressStatus={handleNavgateLogin}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {_renderHeader()}
    </SafeAreaView>
  )
}

export const Home = React.memo(_Home)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})