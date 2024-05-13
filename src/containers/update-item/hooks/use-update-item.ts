import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel, ToDoService} from '../../../core';
import {useState} from 'react';
import {Alert} from 'react-native';

interface RouteParams {
  item: ItemModel;
}

export const useUpdateItem = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const routeParams = (route.params || {}) as RouteParams;

  const [formData, setFormData] = useState<ItemModel>(routeParams.item);

  const onTitleChange = (value: string | undefined) => {
    setFormData({...formData, title: value || '', titleErr: ''});
  };

  const onDescriptionChange = (value: string | undefined) => {
    setFormData({...formData, description: value || ''});
  };

  const onSubmit = async () => {
    if (!formData.title.trim()) {
      setFormData(prev => ({
        ...prev,
        titleErr: 'Please enter the plan title!',
      }));
      return;
    }
    const data: ItemModel = {...formData, createdAt: new Date().toISOString()};

    const results = await ToDoService.shared.getPlans();
    const plans: ItemModel[] = JSON.parse(results!);
    const itemIndex = plans.findIndex(i => i.id === data.id);

    // Creating a new array with the updated item
    const updatedItems = [
      ...plans.slice(0, itemIndex),
      data,
      ...plans.slice(itemIndex + 1),
    ];

    await ToDoService.shared.setPlans(updatedItems);
    Alert.alert('Save successfully!');
    navigation.popToTop();
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return {
    onBackPress,
    onTitleChange,
    onDescriptionChange,
    onSubmit,
    formData,
  };
};
