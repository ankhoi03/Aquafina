import React from 'react';
import { Text, StyleSheet,StyleProp, TextStyle } from 'react-native';
import { fonts } from '../../../asset';

interface CustomTextProps {
    style?: StyleProp<TextStyle>
    children: {bold: boolean, contentStyle?: StyleProp<TextStyle>, content: string,}[]
}
const _CustomText: React.FC<CustomTextProps> = (props) => {
    const {children} = props
    return (
        <Text style={props.style}>
            {children.map((item, index) => (
                <Text
                    key={index}
                    style={StyleSheet.flatten([
                        item.bold ? styles.boldText : styles.regularText,
                        item.contentStyle
                    ])}
                >
                    {item.content}
                </Text>
            ))}
        </Text>
    );
};

const styles = StyleSheet.create({
    regularText: {
        fontFamily: fonts.svn_regular
    },
    boldText: {
        fontFamily: fonts.svn_bold
    },
});

export const CustomText = React.memo(_CustomText)
