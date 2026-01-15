import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
    Text,
    View
} from "react-native";

const category = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>This is {id} category page</Text>
        </View>
    )
}

export default category;