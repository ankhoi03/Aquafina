import { StyleSheet, Text, View, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { fonts } from '../../../asset'
import { colors } from '../../resource'


interface RegularTextProps {
    content: string
    style?: StyleProp<TextStyle>
}

const _RegularText: React.FC<RegularTextProps> = (props) => {
    return (
        <Text style={StyleSheet.flatten([styles.textStyle, props.style])}>
            {props.content}
        </Text>
    )
}

export const RegularText = React.memo(_RegularText)
const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fonts.svn_regular,
        fontSize: 16,
        color: colors.black_light
    }
})