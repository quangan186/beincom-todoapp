import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ItemModel} from '../../../core';
import {useState} from 'react';

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

  return {
    onBackPress,
    onTitleChange,
    onDescriptionChange,
    onSubmit,
    formData,
  };
};
