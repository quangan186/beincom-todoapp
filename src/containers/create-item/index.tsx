import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Input, NavBar} from '../../components';
import {themes} from '../../core';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const CreateItemScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <NavBar
        title="Create Plan"
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Input
          title={'Title: '}
          value={undefined}
          onDataChanged={() => {}}
          placeholder="Enter the title"
        />
        <Input
          title={'Description: '}
          value={undefined}
          onDataChanged={() => {}}
          placeholder="Enter the description"
          multiline
        />
        <Button title="Create" style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.appTheme.primary,
  },
  content: {
    paddingHorizontal: 12,
    gap: 16,
  },
  btn: {
    backgroundColor: themes.appTheme.secondary,
    alignSelf: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 20,
  },
});
