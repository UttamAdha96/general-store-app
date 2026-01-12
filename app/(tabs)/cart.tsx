import { Text, View } from "react-native";

export default function Cart() {
    return (
        <View className="flex-1 bg-white justify-center items-center px-4">
            <Text className="text-2xl font-bold mb-2">
                Cart
            </Text>
            <Text className="text-gray-600">
                Your cart is empty.
            </Text>
        </View>
    );
}



