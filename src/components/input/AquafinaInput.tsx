import { StyleSheet, StyleProp, TextStyle, Text, View, TextInput, ViewStyle, TextProps } from 'react-native'
import React, { FC } from 'react'
import { fonts } from '@assets'
import { colors } from '@utils'

export interface AquafinaInputProps {
  name: string
  placeHolder: string
  viewStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
  textInputStyle?: StyleProp<TextStyle>
  keyboardType?: any
  onChangetext?: (text: string) => void
  value?: string
}

const _AquafinaInput: React.FC<AquafinaInputProps> = (props) => {
  return (
    <View style={StyleSheet.flatten([styles.container, props?.viewStyle])}>
      <Text style={StyleSheet.flatten([styles.text, props?.titleStyle])}>{props.name}</Text>
      <TextInput keyboardType={props.keyboardType} placeholder={props.placeHolder} onChangeText={props.onChangetext} value={props?.value}
        style={StyleSheet.flatten([styles.textInput, props.textInputStyle])}
      />
    </View>
  )
}

export const AquafinaInput = React.memo(_AquafinaInput)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    rowGap: 8
  },
  text: {
    fontFamily: fonts.svn_bold,
    fontSize: 18,
    color: colors.blue_light,
  },
  textInput: {
    marginHorizontal: 2,
    height: 48,
    backgroundColor: colors.white_opacity,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.grey_outline,
    paddingHorizontal: 10
  }
})