import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native';
import { fonts, images } from '@assets'
import { colors } from '@utils';
import { RegularText } from '@components';
import { AppContext } from '@navigation'



const _CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;
  const { loginStatus, setLoginStatus } = useContext(AppContext);
  const handleCloseDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }
  const handleLogout = () => {
    setLoginStatus(false)
  }
  const handleLogin = () => {
    navigation.navigate('Auth');
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCloseDrawer}>
          <Image source={{ uri: images.ic_x }} style={styles.icon} />
        </TouchableOpacity>
        <Image style={styles.logo} source={{ uri: images.logo_app }} />
        <Image source={{ uri: images.transparent }} style={styles.icon} />
      </View>


      {loginStatus ? (
        <View style={styles.info}>
          <Image source={{ uri: images.khoita }} style={styles.avatar} />
          <RegularText content='To An Khoi' style={styles.name} />
        </View>
      ) : (
        <View style={styles.info}>
          <Image source={{ uri: images.ic_user }} style={styles.avatar} />
          <RegularText content='User is not sign in' style={styles.name} />
        </View>
      )}

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={styles.footer}>
        {loginStatus ? (
          <TouchableOpacity style={styles.signView} onPress={handleLogout}>
            <Image source={{ uri: images.icon_logout }} style={styles.icon} />
            <RegularText content='Sign out' style={styles.signText} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.signView} onPress={handleLogin}>
            <Image source={{ uri: images.icon_login }} style={styles.icon} />
            <RegularText content='Sign in' style={styles.signText} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export const CustomDrawer = React.memo(_CustomDrawer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  info: {
    paddingHorizontal: 16,
    paddingVertical: 25,
    gap: 6
  },
  icon: {
    width: 26,
    height: 26
  },
  logo: {
    width: 96,
    height: 31,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 12
  },
  name: {
    fontFamily: fonts.svn_bold,
    fontSize: 18,
    color: colors.black_dark
  },
  footer: {
    height: 76,
    justifyContent: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.grey_outline
  },
  signView: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  signText: {
    fontFamily: fonts.svn_bold,
    fontSize: 17,
    color: colors.blue_light
  }
})