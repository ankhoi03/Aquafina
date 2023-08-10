import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';
import { RegularText } from '@components/text';

const _AquafinaRanked = () => {
  const aquafinaBottles = 200000
  const anotherBottles = 100000
  const date = '13/06/2022 - 19/06/2022'
  interface Rank {
    key: string;
    avatar: string;
    name: string;
    point: number;
  }
  // const DATA: Rank[] = [
  //   {
  //     key: "1",
  //     avatar:,
  //     name: "Nguyễn Văn A",
  //     point: 1000,
  //   },
  //   {
  //     key: "2",
  //     avatar: ,
  //     name: "Nguyễn  B",
  //     point: 999,
  //   },
  //   {
  //     key: "3",
  //     avatar: ,
  //     name: "Nguyễn Văn C",
  //     point: 500,
  //   },
  //   {
  //     key: "4",
  //     avatar: ,
  //     name: "Nguyễn Văn D",
  //     point: 450,
  //   },
  //   {
  //     key: "5",
  //     avatar: ,
  //     name: "Nguyễn Văn E",
  //     point: 200,
  //   },
  // ];


  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: images.banner_ranked }} style={styles.header}>
        <View style={styles.aquafinaInfo}>
          <RegularText content={aquafinaBottles.toString()} style={styles.numOfBottle}/>
          <RegularText content='Chai AQUAFINA' style={styles.typeOfBottle}/>
        </View>

        <View style={styles.anotherInfo}>
          <RegularText content={anotherBottles.toString()} style={styles.numOfBottle}/>
          <RegularText content='Chai khác' style={styles.typeOfBottle}/>
        </View>

      </ImageBackground>

      <ImageBackground source={{ uri: images.background_ranked }} style={styles.body}>
        <View style={styles.titleView}>
          <RegularText content='Bảng xếp hạng' style={styles.titile} />
        </View>
        <RegularText content={date} style={styles.dateStyle}/>
      </ImageBackground>
    </View>
  )
}

export const AquafinaRanked = React.memo(_AquafinaRanked)

const styles = StyleSheet.create({
  container: {
    height: displaySize.height * 0.8,
    width: displaySize.width
  },
  header: {
    width: displaySize.width,
    height: displaySize.height * 0.25
  },
  body: {
    width: displaySize.width,
    height: displaySize.height * 0.55,
    alignItems: 'center',

  },
  titleView: {
    position: 'absolute',
    top: -18,
    width: '40%',
    height: 36,
    backgroundColor: colors.blue_300,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titile: {
    fontFamily: fonts.svn_bold,
    fontSize: 15,
    color: colors.white
  },
  aquafinaInfo: {
    position: 'absolute',
    left: '19%',
    bottom: '30%',
    width: '28%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  anotherInfo: {
    position: 'absolute',
    right: '19%',
    bottom: '30%',
    width: '28%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numOfBottle: {
    fontFamily: fonts.svn_bold,
    fontSize: 16,
    color: colors.blue_light
  },
  typeOfBottle: {
    fontFamily: fonts.svn_bold,
    fontSize: 13,
    color: colors.blue_light
  },
  dateStyle:{
    color:colors.white,
    fontSize:14,
    marginTop:22
  }
})