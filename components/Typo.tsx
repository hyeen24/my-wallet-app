import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { TypoProps } from '@/types'
import { verticalScale } from '@/utils/styling'

const Typo = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps= {},
}: TypoProps) => {

    const textStyles = {
        fontSize: size? verticalScale(size): verticalScale(18),
        color,
        fontWeight};
  return <Text style={[textStyles, style]} {...textProps}>{children}</Text>
};

export default Typo