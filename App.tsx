import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from './src/containers/home';

const Main = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name="Home" component={HomeScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default App;
