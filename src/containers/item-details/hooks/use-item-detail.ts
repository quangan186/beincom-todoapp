import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel, ToDoService} from '../../../core';
import {useState} from 'react';

interface RouteParams {
  item: ItemModel;
}

export const useItemDetail = () => {
  const navigationKey = 'itemDetail';
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const routeParams = (route.params || {}) as RouteParams;

  const [plan, setPlan] = useState<ItemModel>(routeParams.item);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onBackPress = () => {
    navigation.goBack();
  };

  const onLikePress = async () => {
    const selectedItem: ItemModel = {...plan, isLiked: !plan.isLiked};
    setPlan(selectedItem);
    const result = await ToDoService.shared.getPlans();
    const plans: ItemModel[] = JSON.parse(result!);

    const itemIndex = plans.findIndex(i => i.id === selectedItem.id);

    const updatedItems = [
      ...plans.slice(0, itemIndex),
      selectedItem,
      ...plans.slice(itemIndex + 1),
    ];
    await ToDoService.shared.setPlans(updatedItems);
  };

  const onEditBtnPress = () => {
    navigation.navigate({
      key: navigationKey,
      name: 'UpdateItem',
      params: {
        item: routeParams.item,
      },
    });
  };

  const onDeletePress = async () => {
    const result = await ToDoService.shared.getPlans();
    const updatedList: ItemModel[] = JSON.parse(result!).filter(
      (item: ItemModel) => item.id !== plan.id,
    );
    await ToDoService.shared.setPlans(updatedList);
    navigation.goBack();
  };

  return {
    onBackPress,
    onEditBtnPress,
    onLikePress,
    plan,
    isVisible,
    setIsVisible,
    onDeletePress,
  };
};
