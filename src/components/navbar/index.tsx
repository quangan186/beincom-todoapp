import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {themes} from '../../core';

interface Props {
  title?: string;
  rightIcon?: string;
  isRightIconActive?: boolean;

  onBackPress?: () => void;
  onRightPress?: () => void;
}

export const NavBar = (props: Props) => {
  const renderIcon = (name: string | undefined) => {
    if (!name) {
      return null;
    }

    return (
      <Icon
        size={24}
        name={name}
        color={
          props.isRightIconActive
            ? themes.appTheme.like
            : themes.appTheme['bg-secondary']
        }
      />
    );
  };

  const renderBackComponent = () => {
    if (!props.onBackPress) {
      return null;
    }

    return (
      <Appbar.Action
        icon={() => renderIcon('arrow-left')}
        onPress={props.onBackPress}
        animated={false}
        style={styles.leftIconAction}
      />
    );
  };

  const renderRightComponent = () => {
    if (!props.onRightPress || !props.rightIcon) {
      return null;
    }

    return (
      <Appbar.Action
        icon={() => renderIcon(props.rightIcon)}
        onPress={props.onRightPress}
        animated={false}
        style={styles.rightIconAction}
      />
    );
  };

  return (
    <Appbar.Header style={styles.header}>
      {renderBackComponent()}
      <Text style={styles.title}>{props.title}</Text>
      {renderRightComponent()}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  title: {
    flex: 1,
    fontWeight: '700',
    fontSize: 20,
    color: themes.appTheme['bg-secondary'],
  },
  leftIconAction: {
    marginLeft: 0,
    marginRight: 12,
    width: 24,
    height: 24,
  },
  rightIconAction: {
    margin: 0,
    width: 28,
    height: 28,
    marginLeft: 12,
    borderRadius: 0,
  },
});
