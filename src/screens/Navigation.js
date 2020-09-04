import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./Home";
import FavoritesScreen from "./Favorites";
import SettingsScreen from "./Settings";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        tintColor: "#F3F4F5",
        activeTintColor: "#8743CC",
        inactiveTintColor: "#F3F4F5",
        style: {
          justifyContent: "center",
          alignItems: "center",
          height: 84,
          backgroundColor: "#1E1E1E",
          overflow: "hidden",
          borderRadius: 24,
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="star" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Configurações",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-settings" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
