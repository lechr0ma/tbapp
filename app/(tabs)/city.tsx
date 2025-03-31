import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CityScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000", padding: 10 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Петропавловск-Камчатский</Text>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Currency rates"
        placeholderTextColor="#888"
        style={{ backgroundColor: "#222", color: "#fff", padding: 10, borderRadius: 8, marginTop: 10 }}
      />

      {/* Recent Services */}
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 20 }}>Recents</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {["Theater", "Лотерея", "Hotels", "Concerts"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ backgroundColor: "#333", padding: 10, borderRadius: 10, marginRight: 10 }}
          >
            <Text style={{ color: "#fff" }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Cashbacks */}
      <Text style={{ color: "#fff", fontSize: 18, marginTop: 20 }}>Cashbacks</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {[
          { title: "Supermarkets", cashback: "15%" },
          { title: "Fuel", cashback: "7%" },
          { title: "Flowers", cashback: "10%" },
          { title: "Showtimes", cashback: "3%" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ backgroundColor: "#444", padding: 10, borderRadius: 10, marginRight: 10 }}
          >
            <Text style={{ color: "#fff" }}>{item.title}</Text>
            <Text style={{ color: "yellow" }}>up to {item.cashback}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </ScrollView>
  );
}
