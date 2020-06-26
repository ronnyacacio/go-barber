import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';

const { Navigator, Screen } = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}
