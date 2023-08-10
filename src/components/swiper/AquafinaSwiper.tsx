import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from "react-native-swiper";
import { colors, displaySize } from '@utils';
import { images } from '@assets';
import { AquafinaButton } from '@components/button';


const _AquafinaSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper showsButtons={false} autoplay>

        <ImageBackground style={styles.slide} source={{ uri: images.slide_1 }}>
          <AquafinaButton content='Tìm hiểu thêm' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} />
        </ImageBackground>

        <ImageBackground style={styles.slide} source={{ uri: images.slide_2 }}>
          <AquafinaButton content='Tìm hiểu thêm' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} />
        </ImageBackground>

        <ImageBackground style={styles.slide} source={{ uri: images.slide_3 }}>
          <AquafinaButton content='Tìm hiểu thêm' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} />
        </ImageBackground>

        <ImageBackground style={styles.slide} source={{ uri: images.slide_4 }}>
          <AquafinaButton content='Tìm hiểu thêm' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} />
        </ImageBackground>

      </Swiper>
    </View>
  )
}

export const AquafinaSwiper = React.memo(_AquafinaSwiper)

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
    width: '45%',
    position:'absolute',
    bottom:'8%'
  },
  blueContent: {
    color: colors.white
  },
})