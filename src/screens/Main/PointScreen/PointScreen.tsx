import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _PointScreen = () => {
  return (
    <View>
      <Text>PointScreen</Text>
    </View>
  )
}

export const PointScreen = React.memo(_PointScreen)

const styles = StyleSheet.create({})