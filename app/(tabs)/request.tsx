import { useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Request() {
  const insets = useSafeAreaInsets();
  const [product, setProduct] = useState("");

  const handleRequest = () => {
    if (!product.trim()) {
      Alert.alert("Error", "Please enter a product name");
      return;
    }

    // Later → API call
    Alert.alert(
      "Request Sent",
      `"${product}" request submitted successfully`
    );
    setProduct("");
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
      ]}
    >
      <View style={styles.card}>
        <Text style={styles.title}>
          Request Product
        </Text>

        <Text style={styles.subtitle}>
          Can’t find a product?  
          Tell us what you need and we’ll try to stock it.
        </Text>

        <TextInput
          placeholder="Enter product name"
          value={product}
          onChangeText={setProduct}
          style={styles.input}
        />

        <Pressable
          onPress={handleRequest}
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.8 },
          ]}
        >
          <Text style={styles.buttonText}>
            Submit Request
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
