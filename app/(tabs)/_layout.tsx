import React from 'react'
import {Tabs} from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PRIMARY = "#2E7D32";

const _Layout = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: PRIMARY,
                tabBarInactiveTintColor: "#777",
                tabBarStyle: {
                    height: 60 + insets.bottom,
                    paddingBottom: insets.bottom,
                    position: "absolute",
                    backgroundColor: "#FFFFFF",
                    paddingTop: 6,
                    borderTopWidth: 0.5,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    overflow: "hidden",
                    elevation: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "500",
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="request"
                options={{
                    title: "Request",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add-circle-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    headerShown: false,
                    tabBarBadge: 3, // later connect to cart state
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _Layout;
