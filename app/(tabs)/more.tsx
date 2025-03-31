import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import layoyt from '@/constants/Layout';
import { Link } from 'expo-router';

export class home extends Component {
  render() {
    return (
      <SafeAreaView style={layoyt.container}>
        <Text style={layoyt.button}>More Tab</Text>
        <Link href={"/screens/more"} style={layoyt.button}>Go to More Screen</Link>
      </SafeAreaView>
    );
  }
}

export default home