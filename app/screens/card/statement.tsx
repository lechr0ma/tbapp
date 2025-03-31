import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function StatementScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#121212", padding: 16 }}>
      {/* Назад */}
      <TouchableOpacity onPress={() => {}} style={{ marginBottom: 16 }}>
        <Text style={{ color: "white", fontSize: 18 }}>{"←"}</Text>
      </TouchableOpacity>

      {/* Заголовок */}
      <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>Statement</Text>
      <Text style={{ color: "gray", fontSize: 16, marginBottom: 16 }}>for March 2025</Text>

      {/* Баланс на начало периода */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Balance on 20.02.2025</Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>66 026,92 ₽</Text>
      </View>

      {/* Входящие деньги */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Money in</Text>
        <Text style={{ color: "white", fontSize: 16 }}>0 ₽</Text>
      </View>

      {/* Исходящие деньги */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Money out</Text>
        <Text style={{ color: "red", fontSize: 16 }}>-15 460 ₽</Text>
      </View>

      {/* Кэшбэк */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Cashback</Text>
        <Text style={{ color: "white", fontSize: 16 }}>0 ₽</Text>
      </View>

      {/* Баланс на конец периода */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
        <Text style={{ color: "white", fontSize: 16 }}>Balance on 19.03.2025</Text>
        <Text style={{ color: "#4CAF50", fontSize: 16, fontWeight: "bold" }}>+50 566,92 ₽</Text>
      </View>
    </ScrollView>
  );
}
