import {
  Animated,
  BackHandler,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, RelativePathString, router, Stack } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from "@gorhom/bottom-sheet";
import FeatureCard from "@/components/FeatureCard";
import BottomSheetModalProviderWrapper from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider";

const home = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isModal, setIsModal] = useState(false);
  const onModalChange = (index: number) => {
    if (index < 0) {
      setIsModal(false);
    }
  };
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
    setIsModal(true);
  }, []);
  useEffect(() => {
    const handler = () => {
      if (bottomSheetRef.current && isModal) {
        bottomSheetRef.current.dismiss();
        return true;
      }
      return false;
    };
    BackHandler.addEventListener("hardwareBackPress", handler);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handler);
    };
  }, [isModal]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
        <StatusBar style="light" />
        <View
          style={{
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="search" size={24} color="#888" style={{ marginRight: 10 }} />
          <TextInput placeholder="ATMs" placeholderTextColor="#888" style={{ flex: 1, color: "#fff" }} />
        </View>
        <View
          style={{
            padding: 20,
            backgroundColor: "#121212",
            position: "sticky",
            top: 0,
            zIndex: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Profile</Text>
        </View>
        <ScrollView scrollEventThrottle={16} style={{ flex: 1 }}>
          {/* Блок с карточками */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
            <Image source={require("@/assets/images/partial-react-logo.png")} style={{ width: 80, height: 80 }} />
            <Image source={require("@/assets/images/partial-react-logo.png")} style={{ width: 80, height: 80 }} />
            <Image source={require("@/assets/images/partial-react-logo.png")} style={{ width: 80, height: 80 }} />
            <Image source={require("@/assets/images/partial-react-logo.png")} style={{ width: 80, height: 80 }} />
          </View>

          {/* Блок транзакций */}
          <View style={{ padding: 15, backgroundColor: "#1e1e1e", margin: 10, borderRadius: 10 }}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Transactions</Text>
            <Text style={{ color: "#888", fontSize: 14 }}>13 895 ₽ spent in March</Text>
          </View>

          {/* Карточки счетов */}
          <View style={{ padding: 10 }}>
            <AccountCard balance="50 566,92 ₽" name="Black" icon="card" screenHref="../screens/card/black" />
            <AccountCard balance="0 $" name="Black USD" icon="cash" screenHref="../screens/card/usd" />
            <AccountCard balance="95 867,70 ₽" name="Platinum" icon="card" screenHref="../screens/card/plat" />
            <AccountCard
              balance="13 079 ₽"
              name="Investments"
              icon="briefcase"
              change="-5 109,27 ₽ (-28.1%)"
              screenHref="../screens/card/inv"
            />
            <AccountCard balance="Сбербанк *3743" name="Visa" icon="card" />
          </View>

          {/* Дополнительные функции */}
          <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 15 }}>
            <FeatureCard title="Borrow money" icon={require("@/assets/images/react-logo.png")} />
            <FeatureCard title="Save" icon={require("@/assets/images/react-logo.png")} />
            <FeatureCard title="Issue card" icon={require("@/assets/images/react-logo.png")} />
          </View>

          {/* Кнопка просмотра всех продуктов */}
          <TouchableOpacity
            style={{
              backgroundColor: "#FFD700",
              padding: 15,
              margin: 10,
              borderRadius: 10,
              alignItems: "center",
            }}
            onPress={handlePresentModalPress}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>View all products</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* Выдвижной экран */}
        <BottomSheetModal ref={bottomSheetRef} snapPoints={[200, "80%"]} onChange={onModalChange}>
          <BottomSheetView style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 18 }}>Order additional card</Text>
            <Text>Create a fundraiser</Text>
            <Text>Share account</Text>
            <Text>Add currency</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

type AccountCardProps = {
  balance: string;
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  change?: string;
  screenHref?: RelativePathString;
};
const AccountCard = ({ balance, name, icon, change, screenHref }: AccountCardProps) => (
  <TouchableOpacity onPress={() => router.push(screenHref || "/(tabs)")}>
    <View
      style={{
        backgroundColor: "#1e1e1e",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon} size={24} color="#00acee" style={{ marginRight: 10 }} />
        <View>
          <Text style={{ color: "#fff", fontSize: 18 }}>{balance}</Text>
          <Text style={{ color: "#888" }}>{name}</Text>
        </View>
      </View>
      {change && <Text style={{ color: "red", fontSize: 14 }}>{change}</Text>}
    </View>
  </TouchableOpacity>
);

export default home;
