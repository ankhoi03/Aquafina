import { StyleSheet, View, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CustomText, Footer, Header, RegularText } from '@components';
import { colors, displaySize } from '@utils';
import { fonts, images } from '@assets';


type WorldScreenProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists>;
const _WorldScreen: React.FC<WorldScreenProps> = (props) => {
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

  const title_banner_1 = [
    { bold: false, content: 'Khám phá ' },
    { bold: true, content: 'vòng tròn biểu tượng' },
  ]
  const content_banner_2_1 = 'Tiếp tục hành trình lan tỏa vị ngon của sự tinh khiết và không ngừng truyền cảm hứng về phong cách sống thời thượng. Năm 2022, Aquafina đánh dấu cột mốc mới tiên phong lan tỏa cảm cảm hứng  sống xanh bền vững (Sustainability), thời trang hơn và ý nghĩa hơn đến với giới mộ điệu yêu thích thời trang.\n\nHình ảnh vòng tròn lan tỏa cùng mũi tên mang tính biểu tượng với ý nghĩa cùng Aquafina lan tỏa những hành động tích cực đến môi trường và truyền cảm hứng về phong cách Xanh bền vững.'

  const content_banner_2_2 = 'Không chỉ lan tỏa cảm hứng sống Xanh, Aquafina sẽ cùng bạn hành động để mang đến những tác động tích cực đến môi trường. Lần đầu tiên tự hào giới thiệu, Trạm Tái Sinh của Aquafina – Nơi tái sinh vòng đời mới cho chai nhựa.'

  const title_banner_3 = [
    { bold: false, content: 'Cùng ' },
    { bold: true, content: 'AQUAFINA ' },
    { bold: false, content: 'khám phá' },
  ]

  const sub_title_banner_3 = 'HÀNH TRÌNH TÁI SINH VÒNG ĐỜI MỚI CHO CHAI NHỰA'


  const _renderBody = () => {
    return (
      <ScrollView>

        <ImageBackground source={{ uri: images.world_banner_1 }} style={styles.banner}>
          <CustomText style={styles.titleBanner1}>{title_banner_1}</CustomText>
        </ImageBackground>

        <View style={styles.banner_2_container}>
          <RegularText style={styles.titleBanner2} content='AQUAFINA'/>
          <RegularText style={styles.contentBanner2} content={content_banner_2_1}/>
          <Image source={{ uri: images.world_banner_2 }} style={styles.banner}/>
          <RegularText style={styles.contentBanner2} content={content_banner_2_2}/>
        </View>

        <ImageBackground source={{ uri: images.world_banner_3 }} style={styles.banner}>
          <CustomText style={styles.titleBanner3}>{title_banner_3}</CustomText>
          <RegularText style={styles.subtitleBanner3} content={sub_title_banner_3}/>
        </ImageBackground>

        <Image source={{ uri: images.world_banner_4 }} style={styles.banner}/>

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

export const WorldScreen = React.memo(_WorldScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: displaySize.width,
    height: displaySize.height * 0.8,
    alignItems: 'center',
    resizeMode: 'cover'
  },
  titleBanner1: {
    marginTop: '10%',
    fontSize: 20,
    color: colors.blue_light
  },
  banner_2_container:{
    backgroundColor: colors.world_bg,
    width: '100%',
    alignItems: 'center'
  },
  titleBanner2: {
    marginTop: 10,
    marginBottom: 5, 
    color: colors.blue_dark,
    fontSize: 22,
    fontFamily: fonts.svn_bold
  },
  contentBanner2: {
    marginHorizontal: 10,
    color: colors.black_dark,
    fontSize: 15,
    marginTop:10,
    marginBottom: 10
  },
  titleBanner3: {
    marginTop: '10%',
    fontSize: 20,
    color: colors.blue_dark,
    left:-16
  },
  subtitleBanner3: {
    marginTop: 6,
    fontSize: 26,
    color: colors.blue_dark,
    fontFamily: fonts.svn_bold,
    lineHeight: 30,
    marginHorizontal: 30
  },

})