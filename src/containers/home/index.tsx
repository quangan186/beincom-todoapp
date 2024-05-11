import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavBar} from '../../components';
import {ItemCardComponent} from '../../components';
import {Divider} from 'react-native-paper';
import {ItemModel, todoList, themes} from '../../core';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const HomeScreen = () => {
  const navigationKey = 'homeKey';
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const renderDivider = () => {
    return <Divider style={styles.divider} />;
  };

  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <ItemCardComponent
        item={item}
        onPress={() => {
          navigation.navigate({
            name: 'ItemDetail',
            params: {
              item,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Todo App"
        rightIcon="plus-circle"
        onRightPress={() => {
          navigation.navigate({
            key: navigationKey,
            name: 'CreateItem',
            params: {},
          });
        }}
      />

      <FlatList
        data={todoList}
        extraData={todoList}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={renderItem}
        ItemSeparatorComponent={renderDivider}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.appTheme.primary,
  },
  flatList: {},
  flatListContent: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  divider: {
    height: 12,
    backgroundColor: 'transparent',
  },
});
