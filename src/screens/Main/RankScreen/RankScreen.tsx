import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CustomText, Footer, Header, RegularText } from '@components';
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';


type RankScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>
const _RankScreen: React.FC<RankScreenProps> = (props) => {
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
    const date = '13/06/2022 - 19/06/2022'
    interface User {
      avatar: string
      name: string
      score: number
    }
    const CurrentUser: User = {
      avatar: images.khoita,
      name: 'To An Khoi',
      score: 256
    }

    const TopUser: User[] = [
      {
        avatar: images.ic_face_1,
        name: "Sophie Dubois",
        score: 1000,
      },
      {
        avatar: images.ic_face_2,
        name: "Isabella Rossi",
        score: 989,
      },
      {
        avatar: images.ic_face_3,
        name: "Leila Ahmed",
        score: 686,
      },
      {
        avatar: images.ic_face_4,
        name: "Natalia Petrovich",
        score: 404,
      },
      {
        avatar: images.ic_face_5,
        name: "Elena Rodriguez",
        score: 310,
      },
      {
        avatar: images.ic_face_3,
        name: "Leila Ahmed",
        score: 307,
      },
      {
        avatar: images.ic_face_4,
        name: "Natalia Petrovich",
        score: 305,
      },
      {
        avatar: images.ic_face_5,
        name: "Elena Rodriguez",
        score: 301,
      },
      {
        avatar: images.ic_face_3,
        name: "Leila Ahmed",
        score: 290,
      },
      {
        avatar: images.ic_face_4,
        name: "Natalia Petrovich",
        score: 280,
      }
    ];
    const TopUserItem: React.FC<{ item: User, index: number }> = ({ item, index }) => {
      const inTop = index < 3
      let backgroundColor, rank, crown

      switch (index) {
        case 0: {
          backgroundColor = colors.top_1_yellow
          rank = images.ic_top_1
          crown = images.ic_crown_1
          break
        }
        case 1: {
          backgroundColor = colors.top_2_purple
          rank = images.ic_top_2
          crown = images.ic_crown_2
          break
        }
        case 2: {
          backgroundColor = colors.top_3_blue
          rank = images.ic_top_3
          crown = images.ic_crown_3
          break
        }
        default:
          backgroundColor = colors.white;
          break;
      }
      return (
        <>
          {inTop ? (
            <View style={[styles.topUserItem, { backgroundColor }]}>
              <Image source={{ uri: rank }} style={styles.rankImage} />
              <View style={styles.infoUserView}>
                <Image source={{ uri: item?.avatar }} style={styles.avatarImage} />
                <RegularText content={item?.name} style={[styles.name, { color: colors.white }]} />
                <Image source={{ uri: crown }} style={styles.crownImage} />
              </View>
              <View style={styles.scoreView}>
                <RegularText content={item?.score.toString()} style={[styles.score, { color: colors.white }]} />
              </View>
            </View>
          ) : (
            <View style={[styles.topUserItem, { backgroundColor }]}>
              <View style={[styles.infoUserView, { width: '80%' }]}>
                <RegularText content={'#' + (index + 1)} style={[styles.score, { width: 40 }]} />
                <Image source={{ uri: item?.avatar }} style={styles.avatarImage} />
                <RegularText content={item?.name} style={styles.name} />
              </View>
              <View style={styles.scoreView}>
                <RegularText content={item?.score.toString()} style={styles.score} />
              </View>
            </View>
          )}
        </>

      )
    }

    return (
      <ScrollView>
        <View style={{ height: 30 }} />
        <ImageBackground source={{ uri: images.background_ranked }} style={styles.banner}>
          <View style={styles.titleView}>
            <RegularText content='Bảng xếp hạng' style={styles.titile} />
          </View>
          <RegularText content={date} style={styles.dateStyle} />

          {/* List topuser */}

          <View style={styles.topUserView}>
            {TopUser.map((item, index) => (
              <TopUserItem item={item} key={index} index={index} />
            ))}
          </View>

          <View style={styles.footerLogined}>
            <RegularText content='Hạng của tôi' style={styles.titile} />
            <View style={styles.currentUserItem}>
              <View style={styles.infoUserView}>
                <RegularText content={'#' + 90} style={[styles.score, { color: colors.white, width: 40 }]} />
                <Image source={{ uri: CurrentUser.avatar }} style={styles.avatarImage} />
                <RegularText content={CurrentUser.name} style={[styles.name, { color: colors.white }]} />
              </View>
              <View style={styles.scoreView}>
                <RegularText content={CurrentUser.score.toString()} style={[styles.score, { color: colors.white }]} />
              </View>
            </View>
          </View>
        </ImageBackground>

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


export const RankScreen = React.memo(_RankScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  banner: {
    width: displaySize.width,
    height: displaySize.height * 0.8,
    alignItems: 'center',
    resizeMode: 'contain'
  },
  titleView: {
    position: 'absolute',
    top: -16,
    width: '40%',
    height: 32,
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
  dateStyle: {
    color: colors.white,
    fontSize: 14,
    marginTop: 22
  },
  topUserView: {
    marginTop: 12,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6
  },
  topUserItem: {
    height: 38,
    width: '100%',
    borderRadius: 6,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center'
  },
  currentUserItem: {
    height: 38,
    width: '80%',
    borderRadius: 6,
    backgroundColor: colors.white_opacity,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.white,
    borderWidth: 1
  },
  rankImage: {
    width: 42,
    height: 38
  },
  infoUserView: {
    width: '65%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    gap: 4
  },
  avatarImage: {
    width: 28,
    height: 28,
    borderRadius: 999
  },
  name: {
    fontFamily: fonts.svn_bold,
    fontSize: 15,
    color: colors.grey_dark,
  },
  crownImage: {
    width: 22,
    aspectRatio: 1,
    marginStart: 3
  },
  scoreView: {
    flex: 1,
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingEnd: 8
  }
  ,
  score: {
    fontFamily: fonts.svn_bold,
    fontSize: 15,
    color: colors.grey_dark,
  },
  footerLogined: {
    flex: 1,
    width: '100%',
    marginVertical: 25,
    gap: 10,
    alignItems: 'center'
  },
})