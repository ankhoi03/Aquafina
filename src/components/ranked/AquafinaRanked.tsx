import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';
import { RegularText, AquafinaButton } from '@components';
import { useAppDispatch, useAppSelector } from '@data/store/RootStore';
import { fetchUsers } from '@data/store/ListUsers/UserThunk';
import { User } from '@data';



interface RankedProps {
  navigateToLogin?: () => void
  navigateToRankedScreen?: () => void
}
const _AquafinaRanked: React.FC<RankedProps> = (props) => {

  const { navigateToRankedScreen, navigateToLogin } = props

  const aquafinaBottles = 200000
  const anotherBottles = 100000


  const dispatch = useAppDispatch();
  const userSelector = useAppSelector((state) => state.users);
  const authSelector = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const ListUsers = userSelector.users;
  const CurrentUser= authSelector.currentUser
  const loginStatus = authSelector.isLogin

  const date = '13/06/2022 - 19/06/2022'




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
    <View style={styles.container}>
      <ImageBackground source={{ uri: images.banner_ranked }} style={styles.header}>
        <View style={styles.aquafinaInfo}>
          <RegularText content={aquafinaBottles.toString()} style={styles.numOfBottle} />
          <RegularText content='Chai AQUAFINA' style={styles.typeOfBottle} />
        </View>

        <View style={styles.anotherInfo}>
          <RegularText content={anotherBottles.toString()} style={styles.numOfBottle} />
          <RegularText content='Chai khác' style={styles.typeOfBottle} />
        </View>

      </ImageBackground>

      <ImageBackground source={{ uri: images.background_ranked }} style={styles.body}>
        <View style={styles.titleView}>
          <RegularText content='Bảng xếp hạng' style={styles.titile} />
        </View>
        <RegularText content={date} style={styles.dateStyle} />

        {/* List topuser */}

        <View style={styles.topUserView}>
          {ListUsers.slice(0, 5).map((item, index) => (
            <TopUserItem item={item} key={index} index={index} />
          ))}
        </View>

        {/* Current User */}

        {loginStatus ? (
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

            <AquafinaButton content='Xem chi tiết' source={images.white_button} buttonStyle={styles.button} textStyle={styles.whiteContent} onPress={navigateToRankedScreen} />
          </View>
        ) : (
          <View style={styles.footerNonLogin}>
            <RegularText content='Vui lòng đăng nhập để xem hạng của bạn' style={styles.titile} />
            <AquafinaButton content='Đăng nhập' source={images.white_button} buttonStyle={styles.button} textStyle={styles.whiteContent} onPress={navigateToLogin} />
          </View>
        )}

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
    height: displaySize.height * 0.27
  },
  body: {
    width: displaySize.width,
    height: displaySize.height * 0.53,
    alignItems: 'center',

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
    fontSize: 12,
    color: colors.blue_light
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
  footerNonLogin: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  footerLogined: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    gap: 8,
    alignItems: 'center'
  },
  button: {
    width: '80%',
    marginTop: 5
  },
  whiteContent: {
    color: colors.blue_dark
  },
})