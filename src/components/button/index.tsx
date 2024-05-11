import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {themes} from '../../core/themes';

interface Props extends TouchableOpacityProps {
  title?: string;
  icon?: string | undefined;
  isActive?: boolean;
}

export const Button = (props: Props) => {
  const renderIcon = () => {
    if (!props.icon) {
      return null;
    }

    return (
      <Icon
        name={props.icon}
        size={24}
        color={
          props.isActive
            ? themes.appTheme.like
            : themes.appTheme['bg-secondary']
        }
      />
    );
  };

  const renderTitle = () => {
    if (!props.title) {
      return null;
    }

    return <Text style={styles.title}>{props.title}</Text>;
  };

  return (
    <TouchableOpacity style={[styles.container, props.style]} {...props}>
      {renderIcon()}
      {renderTitle()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    color: themes.appTheme['text-main'],
    fontSize: 16,
    fontWeight: '600',
  },
});
