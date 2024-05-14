import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {Button} from '..';
import {themes} from '../../core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  description?: string;
  onCancel?: () => void;
  onDelete?: () => void;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const ModalNotification = (props: Props) => {
  const renderDescription = () => {
    if (!props.description) {
      return null;
    }

    return <Text style={styles.desc}>{props.description}</Text>;
  };

  const renderCancelBtn = () => {
    if (!props.onCancel) {
      return null;
    }

    return (
      <Button
        title={'Cancel'}
        onPress={props.onCancel}
        style={[styles.btn, styles.cancelBtn]}
      />
    );
  };

  const renderDeleteBtn = () => {
    if (!props.onDelete) {
      return null;
    }

    return (
      <Button
        title={'Delete'}
        onPress={props.onDelete}
        style={[styles.btn, styles.deleteBtn]}
      />
    );
  };

  return (
    <Portal>
      <Modal
        visible={props.isVisible}
        onDismiss={() => props.setIsVisible(false)}
        contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Icon
            name={'trash-can-outline'}
            size={72}
            color={themes.appTheme.danger}
          />
          <Text style={styles.title}>{props.title}</Text>
          {renderDescription()}
        </View>
        <View style={styles.btnBox}>
          {renderCancelBtn()}
          {renderDeleteBtn()}
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 12,
    borderRadius: 8,
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    gap: 12,
  },
  btn: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 20,
    fontWeight: '600',
    color: themes.appTheme['text-main'],
  },
  desc: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color: themes.appTheme['text-main'],
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  cancelBtn: {
    backgroundColor: themes.appTheme['text-main'],
  },
  deleteBtn: {
    backgroundColor: themes.appTheme.danger,
  },
});
