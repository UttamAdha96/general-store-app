import { router } from "expo-router";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Cart() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
      ]}
    >
      {/* Header */}
      <Text style={styles.header}>Your Cart</Text>

      {/* Empty State */}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>
          Your cart is empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Looks like you haven’t added anything yet.
        </Text>

        <View style={{ width: "100%" }}>
  <Pressable
    onPress={() => router.push("/")}
    style={({ pressed }) => [
      styles.button,
      pressed && { opacity: 0.85 },
    ]}
  >
    <Text style={styles.buttonText}>
      Browse Products
    </Text>
  </Pressable>
</View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
  backgroundColor: "#111827",
  paddingVertical: 14,
  borderRadius: 14,
  width: "100%",
  alignItems: "center",

  // Android visibility fix
  elevation: 3,
},
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
