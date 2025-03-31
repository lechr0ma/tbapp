import { Text, View } from "react-native";
import React, { Component } from "react";
import { Stack } from "expo-router";

export class _layout extends Component {
  render() {
    return <Stack screenOptions={{ headerShown: false }} />;
  }
}

export default _layout;
