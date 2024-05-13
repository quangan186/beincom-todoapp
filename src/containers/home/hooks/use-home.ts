import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel, ToDoService} from '../../../core';
import {useEffect, useState} from 'react';

export const useHome = () => {
  const navigationKey = 'homeKey';
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [todoItems, setTodoItems] = useState<ItemModel[]>([]);

  const onItemPress = (item: ItemModel) => {
    navigation.navigate({
      key: navigationKey,
      name: 'ItemDetail',
      params: {
        item,
      },
    });
  };

  useEffect(() => {
    const onGetData = async () => {
      try {
        let plans = await ToDoService.shared.getPlans();
        if (plans === null) {
          await ToDoService.shared.setPlans(todoItems);
          return;
        }
        setTodoItems(JSON.parse(plans));
      } catch (e) {
        console.error('Failed to fetch or initialize plans:', e);
      }
    };

    onGetData();
  }, [todoItems]);

  const onLikePress = async (item: ItemModel) => {
    const selectedItem: ItemModel = {...item, isLiked: !item.isLiked};
    const itemIndex = todoItems.findIndex(i => i.title === item.title);

    // Creating a new array with the updated item
    const updatedItems = [
      ...todoItems.slice(0, itemIndex),
      selectedItem,
      ...todoItems.slice(itemIndex + 1),
    ];
    await ToDoService.shared.setPlans(updatedItems);
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
