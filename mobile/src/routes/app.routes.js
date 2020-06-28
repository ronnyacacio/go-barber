import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import NewRoutes from './new.routes';

import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Dashboard: 'event',
  New: 'add-circle-outline',
  Profile: 'person',
};

export default function AppRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
          borderTopColor: '#8d41a8',
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const name = icons[route.name];
          return <Icon name={name} size={20} color={color} />;
        },
      })}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Agendamentos',
        }}
      />

      <Screen
        name="New"
        children={NewRoutes}
        options={{
          title: 'Agendar',
          tabBarVisible: false,
          unmountOnBlur: true,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu perfil',
        }}
      />
    </Navigator>
  );
}
