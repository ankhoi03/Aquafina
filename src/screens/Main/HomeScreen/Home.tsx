import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fonts, images } from '@assets'
import { colors } from '@utils'
import { AquafinaRanked, AquafinaSwiper, Header } from '@components'
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
      <Header onPressLogin={handleNavgateLogin}/>
    )
  }

  const _renderBody = () => {
    return (
      <ScrollView>
        <AquafinaSwiper/>
        
        <AquafinaRanked/>

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