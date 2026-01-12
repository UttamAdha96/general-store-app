import {
    View,
    Text
} from "react-native";
import {useLocalSearchParams} from "expo-router";
import React from "react";

const category = () => {
    const {id} = useLocalSearchParams()
    return (
        <View>
            <Text>This is {id} category page</Text>
        </View>
    )
}

export default category;