import {FlatList, ListRenderItem, StyleSheet, View} from 'react-native';
import React from 'react';
import {NavBar} from '../../components';
import {ItemCardComponent} from '../../components';
import {Divider} from 'react-native-paper';
import {ItemModel, themes} from '../../core';
import {useHome} from './hooks/use-home';

export const HomeScreen = () => {
  const state = useHome();

  const renderDivider = () => {
    return <Divider style={styles.divider} />;
  };

  const renderItem: ListRenderItem<ItemModel> = ({item}) => {
    return (
      <ItemCardComponent
        item={item}
        onPress={() => state.onItemPress(item)}
        onLikePress={state.onLikePress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Todo App"
        rightIcon="plus-circle"
        onRightPress={state.onCreateItemPress}
      />

      <FlatList
        data={state.todoItems}
        extraData={state.todoItems}
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
