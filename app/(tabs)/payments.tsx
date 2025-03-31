import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, ColorValue } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function PaymentsScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Верхний блок с поиском */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
        <Ionicons name="search" size={24} color="#aaa" />
        <TextInput
          placeholder="Currency rates"
          placeholderTextColor="#888"
          style={{ flex: 1, marginLeft: 8, color: "#fff" }}
        />
      </View>

      {/* Заголовок */}
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff", paddingHorizontal: 16 }}>Payments</Text>

      {/* Баннер с обновлением */}
      <View
        style={{
          backgroundColor: "#222",
          padding: 16,
          margin: 16,
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="heart" size={24} color="red" />
        <Text style={{ color: "#fff", marginLeft: 8, flex: 1 }}>Quick look at what has changed in Payments</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Favorites */}
      <Text style={{ color: "#fff", fontSize: 18, paddingHorizontal: 16 }}>Favorites</Text>
      <ScrollView horizontal style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <PaymentButton title="Пополнять без комисс" color="#d4af37" />
        <PaymentButton title="Black ➜ Платинум" color="#0b4daa" />
        <PaymentButton title="Credit card payment" color="#333" />
        <PaymentButton title="Себе на Сбербанк" color="#008000" />
      </ScrollView>

      {/* Опции */}
      <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
        <OptionButton title="To be paid" icon="receipt" />
        <OptionButton title="Autopay" icon="autorenew" />
      </View>

      {/* Переводы по номеру телефона */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Transfer by phone number</Text>
        <TextInput
          placeholder="Enter name or phone number"
          placeholderTextColor="#888"
          style={{ backgroundColor: "#222", color: "#fff", padding: 12, borderRadius: 8, marginTop: 8 }}
        />
      </View>

      {/* Персональные переводы */}
      <ScrollView horizontal style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <ContactButton initials="Т" name="To myself" />
        <ContactButton initials="МЛ" name="Мой Личный" />
        <ContactButton initials="ДЛ" name="Д. Леша" />
        <ContactButton initials="ШР" name="Шашлычка у Армяна" />
      </ScrollView>

      {/* Баннер */}
      <Image
        source={{ uri: "https://your-image-url.com/banner.jpg" }}
        style={{ width: "100%", height: 120, marginVertical: 12 }}
      />

      {/* Transfers */}
      <Text style={{ color: "#fff", fontSize: 18, paddingHorizontal: 16 }}>Transfers</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 16 }}>
        <PaymentButton title="From another bank" color="#008000" />
        <PaymentButton title="By card number" color="#333" />
        <PaymentButton title="Between accounts" color="#0b4daa" />
        <PaymentButton title="By account details" color="#444" />
      </View>

      {/* Payments */}
      <Text style={{ color: "#fff", fontSize: 18, paddingHorizontal: 16 }}>Payments</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", paddingHorizontal: 16 }}>
        <PaymentButton title="Phone bills" color="#333" />
        <PaymentButton title="Housing and utilities" color="#0055aa" />
        <PaymentButton title="State Services" color="#008080" />
        <PaymentButton title="Loan repayment" color="#444" />
      </View>

      {/* Actions */}
      <Text style={{ color: "#fff", fontSize: 18, paddingHorizontal: 16 }}>Actions</Text>
      <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
        <OptionButton title="Request money" icon="download" />
        <OptionButton title="Withdraw cash" icon="credit-card" />
      </View>

    </ScrollView>
  );
}

// Компоненты
const PaymentButton = ({ title, color }: {title: string, color: ColorValue}) => (
  <TouchableOpacity style={{ backgroundColor: color, padding: 12, borderRadius: 8, margin: 4, minWidth: 120 }}>
    <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
  </TouchableOpacity>
);

const OptionButton = ({ title, icon }: { title: string; icon: keyof typeof MaterialIcons.glyphMap }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      backgroundColor: "#222",
      padding: 12,
      borderRadius: 8,
      margin: 4,
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <MaterialIcons name={icon} size={20} color="#fff" />
    <Text style={{ color: "#fff", marginLeft: 8 }}>{title}</Text>
  </TouchableOpacity>
);

const ContactButton = ({ initials, name } :{initials: string, name:string}) => (
  <View style={{ alignItems: "center", marginHorizontal: 8 }}>
    <View
      style={{
        backgroundColor: "#444",
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{initials}</Text>
    </View>
    <Text style={{ color: "#fff", fontSize: 12, marginTop: 4 }}>{name}</Text>
  </View>
);
