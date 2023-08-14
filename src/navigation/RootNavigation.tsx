import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { InputOTP, Login, Home, Register, Success, WorldScreen, GiftScreen, MapScreen, PointScreen, RankScreen } from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomDrawer } from '@components';
import { Image, StyleSheet } from 'react-native';
import { fonts, images } from '@assets';
import { colors } from '@utils';


export type RootAuthParamLists = {
  Login: undefined
  Register: undefined
  Success: undefined
  InputOTP: { phoneNumber: string, type: boolean }
  Main: undefined
}

export type RootMainParamLists = {
  Auth: undefined
  Drawer: undefined
}

export type RootDrawerParamLists = {
  'Trang Chủ': undefined
  'Thế Giới Xanh': undefined
  'Quà Tặng Xanh': undefined
  'Bản Đồ Xanh': undefined
  'Điểm Thưởng Xanh': undefined
  'Bảng Xếp Hạng': undefined
};

const Auth = createNativeStackNavigator<RootAuthParamLists>()
const Main = createNativeStackNavigator<RootMainParamLists>()
const Drawer = createDrawerNavigator<RootDrawerParamLists>()

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}     initialRouteName='Trang Chủ'
      screenOptions={({ route }) => ({
        headerShown: false,
        drawerIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Thế Giới Xanh") {
            icon = focused ? images.ic_world_active : images.ic_world_inactive;
          } else if (route.name === "Quà Tặng Xanh") {
            icon = focused ? images.ic_gift_active : images.ic_gift_inactive;
          } else if (route.name === "Bản Đồ Xanh") {
            icon = focused ? images.ic_map_active : images.ic_map_inactive;
          } else if (route.name === "Điểm Thưởng Xanh") {
            icon = focused ? images.ic_point_active : images.ic_point_inactive;
          } else if (route.name === "Bảng Xếp Hạng") {
            icon = focused ? images.ic_rank_active : images.ic_rank_inactive;
          } else if (route.name === "Trang Chủ") {
            icon = focused ? images.transparent : images.transparent;
          }
          return (
            <Image source={{ uri: icon }} style={{ width: 24, height: 24 }} />
          );
        },
        drawerLabelStyle: styles.drawerLabel,
        drawerActiveTintColor: colors.blue_light,
        drawerInactiveTintColor: colors.grey_dark,
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveBackgroundColor: "transparent",
        drawerStyle: {
          backgroundColor: colors.white,
        },
        drawerType: "slide",
        drawerPosition: "left",
        swipeEdgeWidth: 50,
      })}>
      <Drawer.Screen name="Trang Chủ" component={Home} options={{
        drawerLabel: () => null,
        drawerItemStyle: { display: "none" },
      }} />
      <Drawer.Screen name="Thế Giới Xanh" component={WorldScreen} />
      <Drawer.Screen name="Quà Tặng Xanh" component={GiftScreen} />
      <Drawer.Screen name="Bản Đồ Xanh" component={MapScreen} />
      <Drawer.Screen name="Điểm Thưởng Xanh" component={PointScreen} />
      <Drawer.Screen name="Bảng Xếp Hạng" component={RankScreen} />
    </Drawer.Navigator>
  )
}
const AuthNavigation: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name='Login' component={Login} />
      <Auth.Screen name='InputOTP' component={InputOTP} />
      <Auth.Screen name='Register' component={Register} />
      <Auth.Screen name='Success' component={Success} />
      <Auth.Screen name='Main' component={MainNavigation} />
    </Auth.Navigator>
  )
}
const MainNavigation: React.FC = () => {
  return (
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name='Drawer' component={DrawerNavigation} />
      <Main.Screen name='Auth' component={AuthNavigation} />
    </Main.Navigator>
  )
}

const _RootNavigation: React.FC = () => {
  return (
    <NavigationContainer >
      <MainNavigation />
    </NavigationContainer>
  );
};

export const RootNavigation = React.memo(_RootNavigation)

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 17,
    fontFamily: fonts.svn_bold,
    marginStart: -20,

  },
});