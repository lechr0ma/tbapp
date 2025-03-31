import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import * as LocalAuthentication from "expo-local-authentication";

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLoginPress = () =>{
    setTimeout(() => {
      router.replace("./(tabs)")
    }, 1000);
  }
  async function authenticate() {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Ошибка", "Биометрия не поддерживается или не настроена.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Подтвердите вход с помощью биометрии",
      fallbackLabel: "Использовать пароль",
    });

    if (result.success) {
      setIsAuthenticated(true);
    } else {
      Alert.alert("Ошибка", "Биометрическая аутентификация не пройдена.");
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center", height: "100%" }}>
      <TouchableOpacity
        style={{ backgroundColor: "white", width: 100, height: 100, alignItems: "center", justifyContent: "center" }}
        onPress={onLoginPress}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
