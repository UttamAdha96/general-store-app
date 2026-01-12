import { View, Text } from "react-native";

export default function Profile() {
    return (
        <View className="flex-1 bg-white justify-center items-center px-4">
            <Text className="text-2xl font-bold mb-2">
                Profile
            </Text>
            <Text className="text-gray-600">
                Manage your account.
            </Text>
        </View>
    );
}
