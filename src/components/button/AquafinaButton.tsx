import { StyleSheet, Text, TouchableOpacity, Image, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { fonts } from '@assets'
import { colors } from '@utils'


interface AquafinaButtonProps {
    content: string
    source: string
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

const _AquafinaButton: React.FC<AquafinaButtonProps> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={StyleSheet.flatten([styles.container, props.buttonStyle])}>
            <Image source={{ uri: props.source }} style={styles.backGround}/>
            <Text style={StyleSheet.flatten([styles.contentStyle, props.textStyle])}>
                {props.content} </Text>
        </TouchableOpacity>
    )
}

export  const  AquafinaButton = React.memo(_AquafinaButton)

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    backGround:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    contentStyle:{ 
        fontSize: 16,
        fontFamily: fonts.svn_bold,
        color: colors.white 
    }
})