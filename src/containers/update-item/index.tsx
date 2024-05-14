import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Input, NavBar} from '../../components';
import {themes} from '../../core';
import {useUpdateItem} from './hooks/use-update-item';
import {Card} from 'react-native-paper';
import _ from 'lodash';

export const UpdateItemScreen = () => {
  const state = useUpdateItem();

  const renderError = () => {
    if (_.isEmpty(state.formData.titleErr)) {
      return null;
    }

    return <Text style={styles.error}>{state.formData.titleErr}</Text>;
  };

  return (
    <View style={styles.container}>
      <NavBar title="Update Plan" onBackPress={state.onBackPress} />
      <Card style={styles.content}>
        <Input
          title={'Title'}
          value={state.formData.title}
          onDataChanged={state.onTitleChange}
          placeholder="Enter the title"
          error={!_.isEmpty(state.formData.titleErr)}
          required
        />
        {renderError()}

        <Input
          title={'Description'}
          value={state.formData.description}
          onDataChanged={state.onDescriptionChange}
          placeholder="Enter the description"
          style={styles.descriptionWrapper}
          multiline
        />
        <Button title="Create" style={styles.btn} onPress={state.onSubmit} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.appTheme.primary,
  },
  content: {
    padding: 12,
    marginHorizontal: 12,
    backgroundColor: themes.appTheme.secondary,
  },
  btn: {
    backgroundColor: themes.appTheme.primary,
    alignSelf: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 20,
  },
  descriptionWrapper: {
    marginVertical: 16,
  },
  error: {
    color: themes.appTheme.danger,
    marginTop: 8,
  },
});
