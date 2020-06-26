import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes({ signed }) {
  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
