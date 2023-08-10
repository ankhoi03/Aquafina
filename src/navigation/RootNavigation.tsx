import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { InputOTP, Login, Home, Register, Success } from '@screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
  Home: undefined
}

export type RootDrawerParamLists = {
  Home: undefined
}

const Auth = createNativeStackNavigator<RootAuthParamLists>()
const Main = createNativeStackNavigator<RootMainParamLists>()
const Drawer = createDrawerNavigator<RootDrawerParamLists>()

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Home' component={Home} />
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
        <MainNavigation/>
    </NavigationContainer>
  );
};

export const RootNavigation = React.memo(_RootNavigation)