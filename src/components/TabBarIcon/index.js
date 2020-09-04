import React from 'react';
import { Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MainTabIcon({ focused, color, route }) {
  let iconName;
  let iconSize;

  switch (route) {
    case 'home':
      iconName = `${focused ? 'home' : 'home-outline'}`;
      iconSize = 25;
      break;
    case 'favorites':
      iconName = `${focused ? 'bookmark' : 'bookmark-outline'}`;
      iconSize = 22;
      break;
    case 'settings':
      iconName = `${focused ? 'settings' : 'settings-outline'}`;
      iconSize = 25;
      break;
    default:
      iconName = 'alert-octagram';
      iconSize = 25;
      break;
  }

  return <MaterialCommunityIcons name={iconName} color={color} size={iconSize} />;
}