import Toast from 'react-native-root-toast';
import {themes} from '../themes';

const successBGColor: string = themes.appTheme.success;
const warningBGColor: string = themes.appTheme.like;
const dangerBGColor: string = themes.appTheme.danger;
const normalBGColor: string = themes.appTheme.secondary;

const success = (message: string): void => {
  toastConfig(message, successBGColor);
};

const warning = (message: string): void => {
  toastConfig(message, warningBGColor);
};

const danger = (message: string): void => {
  toastConfig(message, dangerBGColor);
};

const secondary = (message: string): void => {
  toastConfig(message, normalBGColor);
};

const toastConfig = (message: string, backgroundColor: string): void => {
  Toast.show(message, {
    duration: 3000,
    position: Toast.positions.BOTTOM,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor,
    containerStyle: {
      flex: 1,
    },
    textStyle: {
      textAlign: 'left',
    },
    opacity: 0.9,
  });
};

export const toast = {
  success,
  warning,
  danger,
  secondary,
};
