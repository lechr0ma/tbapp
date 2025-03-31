import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const services = [
  { name: "Theater", cashback: "3%", icon: "mask" },
  { name: "Лотерея", cashback: null, icon: "gift" },
  { name: "Hotels", cashback: "10%", icon: "hotel" },
  { name: "Concerts", cashback: "3%", icon: "music" },
];

const offers = [
  { name: "Supermarkets", cashback: "up to 15%", color: "green", icon: "shopping-basket" },
  { name: "Fuel", cashback: "up to 7%", color: "blue", icon: "gas-pump" },
  { name: "Beauty", cashback: null, color: "purple", icon: "spa" },
  { name: "Flowers", cashback: "up to 10%", color: "red", icon: "seedling" },
  { name: "Showtimes", cashback: "up to 3%", color: "pink", icon: "film" },
  { name: "Travel", cashback: "up to 10%", color: "lightblue", icon: "plane" },
  { name: "Goods and services", cashback: "up to 3%", color: "lavender", icon: "car" },
  { name: "Restaurants", cashback: null, color: "yellow", icon: "utensils" },
];

export default function CityScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: "black", padding: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Петропавловск-Камчатский</Text>
        <FontAwesome name="search" size={20} color="white" />
      </View>
      <View style={{ marginTop: 16, flexDirection: "row", gap: 16 }}>
        {services.map((service, index) => (
          <View key={index} style={{ backgroundColor: "#333", padding: 12, borderRadius: 8, alignItems: "center" }}>
            <FontAwesome name={service.icon as any} size={24} color="white" />
            <Text style={{ color: "white", marginTop: 8 }}>{service.name}</Text>
          </View>
        ))}
      </View>
      <View style={{ marginTop: 16, backgroundColor: "#007AFF", padding: 16, borderRadius: 8 }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>ЛУКОЙЛ теперь в Топливе</Text>
        <Text style={{ color: "white", fontSize: 12 }}>Заправляйтесь прямо из машины и получайте кешбэк</Text>
      </View>
      <View style={{ marginTop: 16, flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }}>
        {offers.map((offer, index) => (
          <View
            key={index}
            style={{ backgroundColor: offer.color, padding: 16, borderRadius: 8, width: "48%", marginBottom: 16 }}
          >
            <FontAwesome name={offer.icon as any} size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold", marginTop: 8 }}>{offer.name}</Text>
            {offer.cashback && <Text style={{ color: "yellow" }}>{offer.cashback}</Text>}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
