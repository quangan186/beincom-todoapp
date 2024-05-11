import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './main-navigator';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
