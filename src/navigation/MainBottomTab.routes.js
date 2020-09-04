import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from "../screens/Home";
import FavoritesScreen from "../screens/Favorites";
import SettingsScreen from "../screens/Settings";

const { Navigator, Screen} = createBottomTabNavigator();

export default function MainBottomTab() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => <TabBarIcon {...props} route={route.name} />,
      })}
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
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
        }}
      />
      <Screen
        name="favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
        }}
      />
      <Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Configurações",
        }}
      />
    </Navigator>
  );
}
