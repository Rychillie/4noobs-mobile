import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import MyTabs from "./screens/Navigation";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#2C2C2C" }}>
      <NavigationContainer>
        <MyTabs />
        <StatusBar style="light" />
      </NavigationContainer>
    </View>
  );
}
