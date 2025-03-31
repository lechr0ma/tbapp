import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export class TabsLayout extends Component {
  render() {
    return (
      <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Main",
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: "Payments",
            tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="city"
          options={{
            title: "City",
            tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: "More",
            tabBarIcon: ({ color, size }) => <Ionicons name="card-outline" color={color} size={size} />,
          }}
        />
      </Tabs>
    );
  }
}

export default TabsLayout;
