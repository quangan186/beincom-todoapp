import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavBar} from '../../components';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar
        title="Todo App"
        rightIcon="plus-circle"
        onRightPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
