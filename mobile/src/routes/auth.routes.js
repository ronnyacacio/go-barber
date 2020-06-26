import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
