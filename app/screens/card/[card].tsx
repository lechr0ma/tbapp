import { View, Text, ScrollView, Image, TouchableOpacity, Switch, Linking } from "react-native";
import { Link, router } from "expo-router";
import { useCallback } from "react";

export default function AccountScreen() {
  const openScreen = useCallback((name: string) => {
    switch (name) {
      case "Account statement":
        router.push("./statement")
        break;
      case "Limits on transfers, withdrawals and top-ups":
        router.push("./limits")
        break;
      default:
        router.push("../error")
        break;
    }

  },[])
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#121212", paddingHorizontal: 16, paddingTop: 16 }}>
      {/* Назад и заголовок */}
      <TouchableOpacity onPress={() => {}} style={{ marginBottom: 16 }}>
        <Text style={{ color: "white", fontSize: 18 }}>{"← Back"}</Text>
      </TouchableOpacity>

      {/* Баланс и карты */}
      <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Black</Text>
      <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", marginBottom: 16 }}>50 566,92 ₽</Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
        <Image source={{ uri: "https://via.placeholder.com/50" }} style={{ width: 50, height: 30, borderRadius: 4 }} />
        <TouchableOpacity style={{ marginLeft: 8, backgroundColor: "#333", padding: 8, borderRadius: 4 }}>
          <Text style={{ color: "white", fontSize: 16 }}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Кнопки действий */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        {["Pay", "Add money", "Transfer"].map((title) => (
          <TouchableOpacity key={title} style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#1e88e5",
                width: 40,
                height: 40,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 24 }}>+</Text>
            </View>
            <Text style={{ color: "white", marginTop: 4 }}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Блоки информации */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        <View style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, flex: 1, marginRight: 8 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Account transactions</Text>
          <Text style={{ color: "gray", marginBottom: 8 }}>12 160 ₽ spent in March</Text>
          <View style={{ height: 5, backgroundColor: "#1e88e5", borderRadius: 2.5 }} />
        </View>
        <View style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, flex: 1 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Cashback earned</Text>
          <Text style={{ color: "gray" }}>0 ₽</Text>
          <Text style={{ color: "gray", marginTop: 4 }}>Start spending to earn cashback</Text>
        </View>
      </View>

      {/* Tinkoff Black Rewards */}
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>Tinkoff Black rewards</Text>
      <ScrollView horizontal style={{ marginBottom: 16 }}>
        {[
          { title: "Cashback up to 30%", count: 45 },
          { title: "Increased cashback in March", count: 1 },
        ].map((item, index) => (
          <View key={index} style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, marginRight: 8 }}>
            <Text style={{ color: "white" }}>{item.title}</Text>
            <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>{item.count}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Where to credit */}
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 18, marginBottom: 8 }}>Where to credit</Text>
      <View style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <Text style={{ color: "gray" }}>Balance interest</Text>
        <Text style={{ color: "white" }}>to Tinkoff Black</Text>
        <Text style={{ color: "gray", marginTop: 8 }}>Cashback</Text>
        <Text style={{ color: "white" }}>to Tinkoff Black</Text>
      </View>

      {/* Transaction rounding */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Transaction rounding</Text>
        <Switch value={false} />
      </View>

      {/* Add card */}
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Add card for close ones</Text>
      <TouchableOpacity
        style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, alignItems: "center", marginBottom: 16 }}
      >
        <Text style={{ color: "#1e88e5", fontSize: 16 }}>Add card</Text>
      </TouchableOpacity>

      {/* Bank details */}
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Bank details</Text>
      <Text style={{ color: "gray", marginBottom: 16 }}>Contract number 5308527299</Text>

      {/* QR и Link */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
        <TouchableOpacity style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, flex: 1, marginRight: 8 }}>
          <Text style={{ color: "white" }}>QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "#1e1e1e", padding: 16, borderRadius: 8, flex: 1 }}
          onPress={() => Linking.openURL("https://www.tinkoff.ru")}
        >
          <Text style={{ color: "white" }}>Link</Text>
        </TouchableOpacity>
      </View>

      {/* Account details */}
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>Account details</Text>
      {[
        "Limits on transfers, withdrawals and top-ups",
        "Plan",
        "Account statement",
        "Order a certificate",
        "Services",
      ].map((item, index) => (
        <TouchableOpacity key={index} style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: "#333" }} onPress={()=>{openScreen(item)}} >
          <Text style={{ color: "white", fontSize: 16 }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
