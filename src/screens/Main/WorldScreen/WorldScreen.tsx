import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _WorldScreen = () => {
  return (
    <View>
      <Text>WorldScreen</Text>
    </View>
  )
}

export const WorldScreen = React.memo(_WorldScreen)

const styles = StyleSheet.create({})