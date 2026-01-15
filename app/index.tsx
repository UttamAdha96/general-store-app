import { useAuth } from "@/src/auth/useAuth";
import { Redirect } from "expo-router";

export default function Index() {
  const { user } = useAuth();
  
   console.log("ROOT USER:", user);
  return user
    ? <Redirect href="/(tabs)" />
    : <Redirect href="/(auth)/login" />;
}
