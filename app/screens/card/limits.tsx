import { View, Text, ScrollView, ProgressBarAndroid } from "react-native";

export default function PlanLimitsScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#121212", padding: 16 }}>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Plan limits</Text>
      <Text style={{ color: "gray", fontSize: 14, marginTop: 4 }}>
        Fee will be applied once the limit is reached. Limits will update on 20 April
      </Text>

      <LimitBlock title="Transfers by card number to another bank" amountLeft="20 000 ₽" progress={0.8} />
      <LimitBlock title="Withdrawals at Tinkoff ATMs" amountLeft="500 000 ₽" progress={0.5} />
      <LimitBlock title="Withdrawals at ATMs of any banks" amountLeft="100 000 ₽" progress={0.3} />
      <LimitBlock title="Top-ups through partners" amountLeft="150 000 ₽" progress={0.6} />
    </ScrollView>
  );
}

type limitBlockProps = {
    title: string,
    amountLeft: string,
    progress: number,

}
function LimitBlock({ title, amountLeft, progress }: limitBlockProps) {
  return (
    <View style={{ backgroundColor: "#1E1E1E", padding: 16, borderRadius: 12, marginTop: 16 }}>
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{title}</Text>
      <Text style={{ color: "gray", fontSize: 14, marginBottom: 8 }}>{amountLeft} left</Text>
    </View>
  );
}
