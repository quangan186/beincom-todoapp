import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {themes, useFormatter} from '../../core';
import {Button, ModalNotification, NavBar} from '../../components';
import {useItemDetail} from './hooks/use-item-detail';

export const ItemDetailScreen = () => {
  const state = useItemDetail();
  const {datetimeStringISOToString} = useFormatter();
  return (
    <ScrollView style={styles.container}>
      <NavBar
        title={state.plan.title}
        onBackPress={state.onBackPress}
        rightIcon="star"
        onRightPress={state.onLikePress}
        isRightIconActive={state.plan.isLiked}
      />

      <Card style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.createdTime}>{`Date: ${datetimeStringISOToString(
            state.plan.createdAt,
          )}`}</Text>
          <View style={styles.btnWrapper}>
            <Button
              style={styles.editBtn}
              icon="edit"
              onPress={state.onEditBtnPress}
            />
            <Button
              style={styles.delete}
              icon="delete"
              onPress={() => state.setIsVisible(true)}
            />
          </View>
        </View>
        <Text style={styles.description}>{state.plan.description}</Text>
      </Card>
      <ModalNotification
        title="Are you sure you want to delete?"
        description={'After deletion, this file cannot be restored.'}
        isVisible={state.isVisible}
        setIsVisible={state.setIsVisible}
        onCancel={() => state.setIsVisible(false)}
        onDelete={state.onDeletePress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.appTheme.primary,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWrapper: {
    gap: 8,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
  editBtn: {
    padding: 8,
    backgroundColor: themes.appTheme.primary,
    borderRadius: 8,
  },
  delete: {
    padding: 8,
    backgroundColor: themes.appTheme.danger,
    borderRadius: 8,
  },
  createdTime: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'italic',
    color: themes.appTheme['text-main'],
  },
  contentWrapper: {
    marginHorizontal: 12,
    padding: 12,
    marginBottom: 16,
  },
});
