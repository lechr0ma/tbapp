import { Image, ImageSourcePropType, Text, View } from 'react-native'
import React, { Component } from 'react'

type featureCardProps = {
    title: string,
    icon: ImageSourcePropType,
}
const FeatureCard = ({ title, icon }:featureCardProps) => (
  <View style={{ alignItems: "center" }}>
    <Image source={icon} style={{ width: 60, height: 60 }} />
    <Text style={{ color: "#fff", marginTop: 5 }}>{title}</Text>
  </View>
);

export default FeatureCard