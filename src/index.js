import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import Routes from "./navigation";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#2C2C2C" }}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" />
      </NavigationContainer>
    </View>
  );
}
