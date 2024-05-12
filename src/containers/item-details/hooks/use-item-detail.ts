import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel} from '../../../core';
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

  const onLikePress = () => {
    setPlan({...plan, isLiked: !plan.isLiked});
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

  return {
    onBackPress,
    onEditBtnPress,
    onLikePress,
    plan,
    isVisible,
    setIsVisible,
  };
};
