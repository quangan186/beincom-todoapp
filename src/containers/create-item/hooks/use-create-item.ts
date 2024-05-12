import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {ItemModel} from '../../../core';

export const useCreateItem = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [formData, setFormData] = useState<ItemModel>(new ItemModel());

  const onTitleChange = (value: string | undefined) => {
    setFormData({...formData, title: value || '', titleErr: ''});
  };

  const onDescriptionChange = (value: string | undefined) => {
    setFormData({...formData, description: value || ''});
  };

  const onSubmit = () => {
    if (!formData.title.trim()) {
      setFormData(prev => ({
        ...prev,
        titleErr: 'Please enter the plan title!',
      }));
      return;
    }

    const data: ItemModel = {...formData, createdAt: new Date().toISOString()};
    console.log(data);
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return {onBackPress, onTitleChange, onDescriptionChange, onSubmit, formData};
};
