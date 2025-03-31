import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import layoyt from "@/constants/Layout";

export class home extends Component {
  render() {
    return (
      <SafeAreaView style={layoyt.container}>
        <Text style={layoyt.button}>Profile</Text>
      </SafeAreaView>
    );
  }
}

export default home;
