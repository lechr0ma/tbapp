import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
type defaultProps = {
    children?: React.ReactNode,
    style?: ViewStyle
}
const Box = ({children, style }: defaultProps) => {
  return (
    <View style={style}>
        {children}
    </View>
  )
}

export default Box