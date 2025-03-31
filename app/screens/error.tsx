import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="yellow" />
          <Text style={{ color: "white", fontSize: 18, marginTop: 16 }}>Loading...</Text>
        </>
      ) : error ? (
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 18, marginBottom: 16 }}>Error loading data</Text>
          <TouchableOpacity onPress={() => setLoading(true)}>
            <Text style={{ color: "#4CAF50", fontSize: 18 }}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
