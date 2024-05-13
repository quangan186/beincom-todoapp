import AsyncStorage from '@react-native-async-storage/async-storage';
import {ItemModel} from '../models';

export class ToDoService {
  KEY = 'plans';

  getPlans(): Promise<string | null> {
    return AsyncStorage.getItem(this.KEY);
  }

  setPlans(plans: ItemModel[]): Promise<void> {
    return AsyncStorage.setItem(this.KEY, JSON.stringify(plans));
  }

  updatePlans(plan: ItemModel): Promise<void> {
    return AsyncStorage.mergeItem(this.KEY, JSON.stringify(plan));
  }

  removePlans(): Promise<void> {
    return AsyncStorage.removeItem(this.KEY);
  }

  static shared = new ToDoService();
}
