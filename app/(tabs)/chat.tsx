import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import layoyt from '@/constants/Layout'

const index = () => {
  return (
    <SafeAreaView >
      <Text style={layoyt.button}>index</Text>
    </SafeAreaView>
  )
}

export default index