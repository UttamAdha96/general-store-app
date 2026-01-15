import { useAuth } from "@/src/auth/useAuth";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login("demo@gmail.com", "123");
    router.replace("/"); // 🔥 THIS IS THE MISSING PIECE
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "Black", fontSize: 25 }}>Welcome to the Login Page</Text>

      <TouchableOpacity
        onPress={handleLogin}
        style={{ marginTop: 20, backgroundColor: "black", padding: 12 }}
      >
        <Text style={{ color: "white" }}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
