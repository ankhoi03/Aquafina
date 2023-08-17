import { StyleSheet, View, ScrollView, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootDrawerParamLists, RootGiftParamLists, RootMainParamLists } from '@navigation'
import { DrawerActions } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer'
import { AquafinaButton, CustomText, Footer, Header, RegularText } from '@components';
import { colors } from '@utils';
import { fonts, images } from '@assets';



type GiftRuleProps = NativeStackScreenProps<RootMainParamLists> & DrawerScreenProps<RootDrawerParamLists> & NativeStackScreenProps<RootGiftParamLists>
const _GiftRule: React.FC<GiftRuleProps> = (props) => {
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
  const handleNavgateGoBack = () => {
    navigation.goBack();
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

    const content_1 = 'Chương trình dành cho người chơi là công dân nước Cộng hòa Xã hội chủ nghĩa Việt Nam, và trên 18 tuổi.'

    const content_2_1 = 'Người chơi tham gia chương trình bằng cách thực hiện theo các bước dưới đây:'
    const content_2_2_step_1 = [
      { bold: true, contentStyle: styles.stepTitle, content: 'Bước 1:' },
      { bold: false, content: ' Người chơi đến các địa điểm lắp đặt máy thu gom vỏ chai nhựa đã qua sử dụng của Aquafina (sau đây được gọi tắt là ' },
      { bold: true, content: '"Trạm Tái Sinh"' },
      { bold: false, content: ') để tham gia vào chương trình ' },
      { bold: true, content: '“Tái sinh chai nhựa – Nhận quà sống xanh”.\n' },
      { bold: false, content: 'Tại mỗi Trạm Tái Sinh sẽ có lắp đặt một màn hình LCD (hoặc màn hình điện tử) ghi rõ thông tin hướng dẫn người tham gia thực hiện theo các bước tuần tự để hoàn thành một lượt tham gia.' }
    ]

    const content_2_2_step_2 = [
      { bold: true, contentStyle: styles.stepTitle, content: 'Bước 2:' },
      { bold: false, content: ' Người chơi nhấn vào nút ' },
      { bold: true, content: '"Bắt đầu"' },
      { bold: false, content: ' trên màn hình LCD (hoặc màn hình điện tử, tùy từng Trạm Tái Sinh) để bắt đầu tham gia chương trình.' }
    ]

    const content_2_2_step_3 = [
      { bold: true, contentStyle: styles.stepTitle, content: 'Bước 3:' },
      { bold: false, content: ' Người chơi bỏ chai nhựa rỗng vào vị trí có ghi ' },
      { bold: true, content: '"Nhận chai ở đây"' },
      { bold: false, content: ' của máy tại Trạm Tái Sinh và chờ hệ thống xử lý.' }
    ]

    const content_2_2_step_4_1 = [
      { bold: true, contentStyle: styles.stepTitle, content: 'Bước 4:' },
      { bold: false, content: ' Sau khi hệ thống xử lý xong, màn hình LCD/điện tử sẽ trả về một mã QR. Người chơi sử dụng điện thoại để quét mã QR trên màn hình để dẫn vào website: ' },
      { bold: true, content: 'http://aquafina.pepsishop.vn/.' },
    ]

    const content_2_2_step_4_1_1 = '• Nếu người chơi lần đầu tham gia, người chơi cần thực hiện đăng ký tài khoản bằng cách nhập số điện thoại theo hướng dẫn tại website. Hệ thống sẽ gửi mã OTP để xác minh số điện thoại của người chơi. Người chơi cần nhập mã OTP để đăng nhập và nhận thông báo về tổng điểm Aquafina mình đã tích lũy.'

    const content_2_2_step_4_1_2 = [
      { bold: false, content: '• Nếu người chơi đã đăng ký tài khoản, thì khi quét mã QR để dẫn về website: ' },
      { bold: true, content: 'http://aquafina.pepsishop.vn/, ' },
      { bold: false, content: 'người chơi cần nhập số điện thoại để hệ thống ghi nhận điểm Aquafina của lượt tham gia mới.' }
    ]

    const content_2_2_step_4_2 = 'Người chơi sẽ được tích lũy điểm Aquafina và điểm Aquafina sẽ được tổng kết mỗi tuần theo tỷ lệ quy đổi điểm như sau:'
    const content_2_2_step_4_2_1 = [
      { bold: true, content: '• Chai Aquafina: ' },
      { bold: false, content: 'người chơi được ghi nhận 2 điểm Aquafina cho mỗi vỏ chai Aquafina.' },
    ]
    const content_2_2_step_4_2_2 = [
      { bold: true, content: '• Không phải chai Aquafina: ' },
      { bold: false, content: 'người chơi được ghi nhận 1 điểm Aquafina cho mỗi vỏ chai.' },
    ]

    const content_2_2_step_5 = [
      { bold: true, contentStyle: styles.stepTitle, content: 'Bước 5:' },
      { bold: false, content: ' Mỗi tuần, căn cứ vào số lượng người chơi và điểm Aquafina mà người chơi tích lũy được, SPVB sẽ công bố bảng xếp hạng ' },
      { bold: true, content: '400 người ' },
      { bold: false, content: 'chơi có điểm Aquafina cao nhất (được hiển thị đầy đủ trên bảng xếp hạng tại website ' },
      { bold: true, content: 'http://aquafina.pepsishop.vn/' },
      { bold: false, content: ' và trên fanpage' },
      { bold: true, content: ' https://www.facebook.com/Aquafinavietnam' },
      { bold: false, content: ') vào lúc 12h00’ giờ ngày thứ 7 hàng tuần (hoặc một thời gian khác theo quyết định của Công ty TNHH Nước giải khát Suntory PepsiCo Việt Nam - SPVB) trong thời gian diễn ra chương trình.' },

    ]
    const content_note = '*Lưu ý: Người chơi vẫn có thể tiếp tục chơi và tích lũy điểm Aquafina ở các tuần tiếp theo để có cơ hội nhận được các phần quà trong thời gian diễn ra chương trình.'

    const content_2_2 = '• Số điểm Aquafina có được hàng tuần sẽ không được cộng dồn trong suốt thời gian diễn ra chương trình, mà sẽ được tổng kết điểm Aquafina vào mỗi tuần.\n• Quà tặng chỉ được trao bằng hiện vật, không có giá trị quy đổi thành tiền mặt.\n• Do số lượng quà tặng có giới hạn, SPVB có quyền thay đổi quà tặng (về kích thước, màu sắc, sản phẩm) nhưng đảm bảo sẽ giữ nguyên giá trị đã cam kết.\n• Khi chương trình kết thúc, số điểm Aquafina không được sử dụng sẽ không còn giá trị.\n• Chương trình có thể kết thúc sớm khi số lượng quà tặng đã được quy đổi hết.\n• Người chơi chịu các khoản thuế, phí theo quy định của pháp luật khi nhận quà tặng theo chương trình này.'

    const content_2_3 = 'Số lượng quà tặng và điểm Aquafina cần thiết để quy đổi được quy định chi tiết theo bảng dưới đây'

    const content_2_4 = [
      { bold: false, content: '• Mỗi tuần SPVB sẽ công bố danh sách 400 người chơi có điểm Aquafina cao nhất và quà tặng trên fanpage Aquafina và trên website ' },
      { bold: true, content: 'http://aquafina.pepsishop.vn/ vào lúc 12h00’ giờ ngày thứ 7 hàng tuần trong thời gian diễn ra chương trình, ' },
      { bold: false, content: 'người chơi cần cung cấp thông tin cá nhân cho SPVB theo hướng dẫn trong vòng 7 ngày kể từ ngày đổi quà để được hướng dẫn nhận quà tặng. Việc người chơi cung cấp thông tin cá nhân cho SPVB theo mục đích này được hiểu là hành động cho phép SPVB thu thập và sử dụng thông tin cá nhân của người chơi theo mục địch đã nêu. Trong mọi trường hợp, việc người chơi gửi thông tin nhận quà sau thời gian quy định là không hợp lệ, và được xem là người chơi từ bỏ việc nhận quà.\n • Quà tặng sẽ được vận chuyển đến địa chỉ mà người chơi đã cung cấp khi Bên thứ 3 – phụ trách việc vận chuyển quà cho SPVB trong vòng 30 ngày kể từ ngày kết thúc chương trình. Trong trường hợp bất khả kháng như thiên tai, dịch bệnh, việc vận chuyển có thể bị ảnh hưởng và thời gian trao quà sẽ kéo dài hơn so với thời hạn đã cam kết nêu trên. SPVB sẽ không chịu trách nhiệm nếu thông tin nhận quà mà người chơi cung cấp không chính xác. Người chơi có trách nhiệm ký tên trên phiếu giao hàng, biên bản bàn giao quà tặng, vận đơn bưu điện hoặc một tài liệu có tên gọi khác nhằm xác định đã nhận quà từ chương trình.\n • Mỗi cá nhân có quyền thắng nhiều hơn 1 giải trong thời gian diễn ra chương trình với điều kiện không thắng giải trong cùng 1 thời điểm.' },
    ]

    const content_3 = [
      { bold: false, content: 'SPVB có quyền cập nhật và thay đổi thể lệ chương trình này để phù hợp hơn với người chơi và thông báo công khai đến người chơi. Trong trường hợp có sự thay đổi về thể lệ cũng như thời gian tổ chức, SPVB sẽ thông báo trên trang fanpage của chương trình tại ' },
      { bold: true, content: 'https://www.facebook.com/Aquafinavietnam \n' },
      { bold: false, content: 'Mọi thắc mắc liên quan đến chương trình, người chơi có thể nhắn tin vào hộp thư trang fan page của chương trình tại: ' },
      { bold: true, content: 'https://www.facebook.com/Aquafinavietnam ' },
      { bold: false, content: 'hoặc gọi điện theo số tổng đài 19001220. SPVB chỉ chịu trách nhiệm giải quyết những khiếu nại, tranh chấp được gửi đến SPVB trong thời hạn từ lúc bắt đầu chương trình cho đến khi hoàn tất việc trao quà tặng cho người chơi quy đổi quà tặng hợp lệ theo quy định tại Điều 2.4 nêu trên. Trong mọi trường hợp, nếu có tranh chấp về việc thực chương trình (bao gồm nhưng không giới hạn việc xác định người chơi chiến thắng theo bảng xếp hạng tuần, quy đổi quà tặng hợp lệ), thì quyền quyết định cuối cùng sẽ thuộc về SPVB.\n SPVB cam kết thực hiện đúng và hoàn toàn chịu trách nhiệm về chương trình trên theo các qui định của pháp luật hiện hành. Phù hợp với qui định của pháp luật, SPVB có quyền chấm dứt hoặc huỷ chương trình này trong trường hợp bất khả kháng và sẽ thông báo công khai phù hợp với quy định pháp luật. Nếu phát hiện có dấu hiệu gian lận, sử dụng công cụ, phần mềm hỗ trợ, tài khoản của người chơi sẽ bị khóa đến hết thời gian diễn ra chương trình, mọi quà tặng sẽ bị thu hồi.\n Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi hoặc truy cập Nền tảng, người chơi xác nhận và đồng ý rằng người chơi chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn cho mục đích thương mại.' },
    ]

    interface Gift {
      name: string,
      image: string,
      price: number,
      quantity: number
    }
    const GiftList: Gift[] = [
      {
        name: 'Nón lưỡi trai\nAquafina x Repeat',
        image: images.aqf_gift_non,
        price: 200000,
        quantity: 100
      },
      {
        name: 'Túi tote\nAquafina x Repeat',
        image: images.aqf_gift_tui,
        price: 100000,
        quantity: 100
      },
      {
        name: 'Áo thời trang\nAquafina x Repeet\n(Trắng)',
        image: images.aqf_gift_aothun_trang,
        price: 200000,
        quantity: 100
      },
      {
        name: 'Vớ\nAquafina x Repeat',
        image: images.aqf_gift_vo,
        price: 50000,
        quantity: 100
      },
    ]
    const GiftItem: React.FC<Gift> = (props) => {
      const { name, image, price, quantity } = props;
      return (
        <View style={styles.giftItem}>
          <View style={styles.giftContainer}>
            <Image source={{ uri: images.frame_gift_active }} style={styles.giftFrame} />
            <Image source={{ uri: image }} style={styles.giftImage} />
          </View>
          <RegularText content={name} style={styles.subTitle} />
          <RegularText content={'Số lượng quà tặng mỗi tuần: ' + quantity} style={styles.content} />
          <RegularText content={'Cách thức đổi quà: \nTrao ngẫu nhiên cho 100 người trong tổng số 388 người có điểm Aquafina cao nhất còn lại.'} style={styles.content} />
          <RegularText content={'Giá trị quà tặng (+VAT): ' + price + ' đồng'} style={styles.content} />

        </View>
      )
    }

    const column1 = GiftList.slice(0, Math.ceil(GiftList.length / 2));
    const column2 = GiftList.slice(Math.ceil(GiftList.length / 2));


    return (
      <ScrollView>

        <View style={styles.content_container}>

          <RegularText content='THỂ LỆ CHƯƠNG TRÌNH' style={styles.title} />

          <RegularText content='TÁI SINH CHAI NHỰA - NHẬN QUÀ SỐNG XANH' style={styles.sologan} />

          <RegularText content='(Diễn ra từ ngày 17/07/2022 đến hết ngày 17/10/2022)' style={[styles.content, { alignSelf: 'center' }]} />

          <RegularText content='1. Đối tượng tham gia:' style={styles.subTitle} />

          <RegularText content={content_1} style={styles.content} />

          <RegularText content='2. Nội dung và thể lệ chi tiết chương trình:' style={styles.subTitle} />

          <RegularText content='2.1. Cách thức tham gia chương trình:' style={styles.minSubTitle} />

          <RegularText content={content_2_1} style={styles.content} />
          <View style={{ marginLeft: 16, gap: 5 }}>

            <CustomText style={styles.content}>{content_2_2_step_1}</CustomText>

            <CustomText style={styles.content}>{content_2_2_step_2}</CustomText>

            <CustomText style={styles.content}>{content_2_2_step_3}</CustomText>

            <CustomText style={styles.content}>{content_2_2_step_4_1}</CustomText>

            <View style={{ marginLeft: 10, gap: 5 }}>

              <RegularText content={content_2_2_step_4_1_1} style={styles.content} />

              <CustomText style={styles.content}>{content_2_2_step_4_1_2}</CustomText>

            </View>

            <RegularText content={content_2_2_step_4_2} style={styles.content} />

            <View style={{ marginLeft: 10, gap: 5 }}>

              <CustomText style={styles.content}>{content_2_2_step_4_2_1}</CustomText>

              <CustomText style={styles.content}>{content_2_2_step_4_2_2}</CustomText>

            </View>

            <CustomText style={styles.content}>{content_2_2_step_5}</CustomText>

            <RegularText content={content_note} style={[styles.content, { fontFamily: fonts.svn_bold }]} />

          </View>

          <RegularText content='2.2. Những quy định về chương trình:' style={styles.minSubTitle} />

          <View style={{ marginLeft: 16, gap: 5 }}>

            <RegularText content={content_2_2} style={styles.content} />

          </View>

          <RegularText content='2.3. Số lượng quà tặng:' style={styles.minSubTitle} />

          <View style={{ marginLeft: 16, gap: 5 }}>

            <RegularText content={content_2_3} style={styles.content} />

          </View>

          <View style={styles.giftView}>
            <View style={{ width: '50%' }}>
              {column1.map((gift) => (
                <GiftItem
                  key={gift.name}
                  name={gift.name}
                  image={gift.image}
                  price={gift.price}
                  quantity={gift.quantity}
                />
              ))}
            </View>
            <View style={{ width: '50%' }}>

              {column2.map((gift) => (
                <GiftItem
                  key={gift.name}
                  name={gift.name}
                  image={gift.image}
                  price={gift.price}
                  quantity={gift.quantity}
                />
              ))}
            </View>
          </View>

          <RegularText content='2.4. Cách thức nhận quà tặng:' style={styles.minSubTitle} />
          <View style={{ marginLeft: 16, gap: 5 }}>
            <CustomText style={styles.content}>{content_2_4}</CustomText>
          </View>

          <RegularText content='3. Quy định chung:' style={styles.subTitle} />
          <View style={{ marginLeft: 16, gap: 5 }}>
            <CustomText style={styles.content}>{content_3}</CustomText>
          </View>

          <AquafinaButton content='Đã hiểu' source={images.blue_button} buttonStyle={styles.button} textStyle={styles.blueContent} onPress={handleNavgateGoBack} />
        </View>

        <Footer navgateToWorldScreen={handleNavgateToWorldScreen} navgateToGiftScreen={handleNavgateToGiftScreen} navgateToMapScreen={handleNavgateToMapScreen} navgateToPointScreen={handleNavgateToPointScreen} navgateToRankedScreen={handleNavgateToRankedScreen} />

      </ScrollView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      {_renderHeader()}
      <Image source={{ uri: images.frame_rule }} style={styles.frame} />
      {_renderBody()}

    </SafeAreaView>
  )
}

export const GiftRule = React.memo(_GiftRule)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  frame: {
    width: '85%',
    height: '65%',
    alignItems: 'center',
    resizeMode: 'cover',
    position: 'absolute',
    right: 0,
    top: '18%'
  },
  button: {
    width: 120,
    marginStart: 16,
    marginVertical: 20
  },
  blueContent: {
    color: colors.white
  },
  content_container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: colors.black_dark,
    fontFamily: fonts.svn_bold,
    marginTop: 5,
    marginBottom: 8
  },
  sologan: {
    fontSize: 14,
    color: colors.blue_light,
    fontFamily: fonts.svn_bold
  },
  content: {
    fontSize: 13,
    color: colors.black_light,
    fontFamily: fonts.svn_regular,

  },
  subTitle: {
    fontSize: 14,
    color: colors.black_dark,
    fontFamily: fonts.svn_bold,
    marginTop: 5,
    marginBottom: 2
  },
  minSubTitle: {
    fontSize: 13.5,
    color: colors.black_dark,
    fontFamily: fonts.svn_italic
  },
  stepTitle: {
    fontFamily: fonts.svn_bold,
    textDecorationLine: 'underline'
  },
  giftView: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row'
  },
  giftItem: {
    width: '95%',
    margin: 10,
    height: 360,
  },
  giftContainer: {
    width: '100%',
    aspectRatio: 1.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.blue_400
  },
  giftImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain'
  },
  giftFrame: {
    width: '95%',
    height: '95%',
    resizeMode: 'contain',
    position: 'absolute',
    top: -3,
    opacity: 0.4
  },

})