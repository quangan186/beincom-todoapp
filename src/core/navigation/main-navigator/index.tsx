import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TabNavigator} from '../tab-navigator';
import {CreateItemScreen, ItemDetailScreen} from '../../../containers';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="CreateItem" component={CreateItemScreen} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
    </Stack.Navigator>
  );
};
