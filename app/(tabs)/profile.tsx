import { useAuth } from "@/src/auth/useAuth";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return <Text>NO USER</Text>;
  }

  const handleLogout = () => {
    logout();
   router.replace("/(auth)/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ID: {user.id}</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{ marginTop: 20, backgroundColor: "red", padding: 12 }}
      >
        <Text style={{ color: "white" }}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}
