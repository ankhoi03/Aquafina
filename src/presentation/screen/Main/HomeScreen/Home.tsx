import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { fonts, images } from '../../../../asset'
import { colors } from '../../../resource'
import { CustomText } from '../../../component'




const _Home: React.FC = () => {
  const textData = [
    { bold: false, contentStyle: styles.underLine, content: 'Chữ gạch chân: ',  },
    { bold: true, contentStyle: styles.colorGrey,  content: 'chữ đậm,',  },
    { bold: true, contentStyle: styles.colorRed,  content: '  chữ đỏ.', },
    { bold: false, contentStyle: styles.colorGrey, content: ' Và nhiều kiểu chữ khác nữa,...', },
  ];

  return (
    <ImageBackground style={styles.container} source={{ uri: images.background_app }}>

      <CustomText>{textData}</CustomText>


    </ImageBackground>
  )
}

export const Home = React.memo(_Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleButton: {
    width: 343
  },
  styleContent: {
    color: colors.blue_dark
  },
  underLine:{
    fontSize:18,
    color: colors.red_light,
    textDecorationLine: 'underline'
  },
  colorGrey:{
    fontSize:18,
    color: colors.grey_dark
  },
  colorRed:{
    fontSize:18, 
    color: colors.red_light}
})