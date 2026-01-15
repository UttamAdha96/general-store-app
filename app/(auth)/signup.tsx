import { useAuth } from "@/src/auth/useAuth";
import { Text, View } from "react-native";

export default function SignupScreen() {
  const { signup } = useAuth();
  return (
    <View>
      <Text>Signup works</Text>
    </View>
  );
}

