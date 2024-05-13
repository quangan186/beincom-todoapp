import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {ItemModel, ToDoService} from '../../../core';
import {Alert} from 'react-native';

export const useCreateItem = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [formData, setFormData] = useState<ItemModel>(new ItemModel());

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

    let result = await ToDoService.shared.getPlans();
    if (result === null) {
      result = '[]';
    }

    let plans: ItemModel[] = JSON.parse(result);
    let data: ItemModel;

    if (plans.length === 0) {
      data = {
        ...formData,
        createdAt: new Date().toISOString(),
        id: `${plans.length + 1}`,
      };
    } else {
      data = {
        ...formData,
        createdAt: new Date().toISOString(),
        id: `${Number(plans[plans.length - 1].id) + 1}`,
      };
    }

    const updatedItems = [...plans, data];
    await ToDoService.shared.setPlans(updatedItems);
    setFormData(new ItemModel());
    Alert.alert('Created successfully!');
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return {onBackPress, onTitleChange, onDescriptionChange, onSubmit, formData};
};
