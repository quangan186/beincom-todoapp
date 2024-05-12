import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel, todoList} from '../../../core';
import {useState} from 'react';

export const useSaved = () => {
  const navigationKey = 'savedKey';
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [todoItems, setTodoItems] = useState<ItemModel[]>(
    todoList.filter(item => item.isLiked),
  );

  const onItemPress = (item: ItemModel) => {
    navigation.navigate({
      key: navigationKey,
      name: 'ItemDetail',
      params: {
        item,
      },
    });
  };

  const onLikePress = (item: ItemModel) => {
    const selectedItem: ItemModel = {...item, isLiked: !item.isLiked};
    const itemIndex = todoItems.findIndex(i => i.title === item.title);

    // Creating a new array with the updated item
    const updatedItems = [
      ...todoItems.slice(0, itemIndex),
      selectedItem,
      ...todoItems.slice(itemIndex + 1),
    ];

    setTodoItems(updatedItems);
  };

  const onCreateItemPress = () => {
    navigation.navigate({
      key: navigationKey,
      name: 'CreateItem',
    });
  };

  return {
    onItemPress,
    onCreateItemPress,
    onLikePress,
    todoItems,
  };
};
