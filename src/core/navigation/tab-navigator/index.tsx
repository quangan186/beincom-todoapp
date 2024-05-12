import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen, SavedScreen} from '../../../containers';
import {themes} from '../../themes';

const Main = createBottomTabNavigator();

export const TabNavigator = () => {
  const renderIcon = (focused: boolean, name: string) => {
    return (
      <Icon
        name={name}
        size={24}
        color={focused ? themes.appTheme.primary : themes.appTheme['text-main']}
      />
    );
  };

  const renderTitle = (focused: boolean, title: string) => {
    return (
      <Text style={[styles.title, focused && styles.active]}>{title}</Text>
    );
  };

  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => renderIcon(focused, 'home'),
          tabBarLabel: ({focused}) => renderTitle(focused, 'Home'),
        }}
      />
      <Main.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({focused}) => renderIcon(focused, 'checklist'),
          tabBarLabel: ({focused}) => renderTitle(focused, 'Saved'),
        }}
      />
    </Main.Navigator>
  );
};

const styles = StyleSheet.create({
  active: {color: themes.appTheme.primary},
  title: {
    fontSize: 16,
    color: themes.appTheme['text-main'],
  },
});
