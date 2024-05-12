import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './main-navigator';
import {PaperProvider} from 'react-native-paper';

export const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
