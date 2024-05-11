import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {themes} from '../../core';

interface Props extends ViewProps {
  title: string;
  value: string | undefined;
  onDataChanged: (value: string | undefined) => void;
  required?: boolean;
  error?: boolean;
  placeholder?: string;
  inputProps?: TextInputProps;
  multiline?: boolean;
}

export const Input = (props: Props) => {
  const [secure, setSecure] = useState<boolean | undefined>(
    props.inputProps?.secureTextEntry,
  );

  const styles = getStyle(props.multiline || false);

  const renderSecureAction = () => {
    if (props.inputProps?.secureTextEntry) {
      return (
        <TouchableOpacity
          activeOpacity={0.75}
          style={styles.secureAction}
          onPress={() => setSecure(prevState => !prevState)}>
          <Icon
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={16}
            color={themes.appTheme.secondary}
          />
        </TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.title}>
        {props.title}
        {props.required && <Text>{' *'}</Text>}
      </Text>
      <View
        style={[
          styles.inputView,
          props.error && styles.error,
          props.inputProps?.secureTextEntry && styles.inputWithSecure,
        ]}>
        <TextInput
          {...props.inputProps}
          style={styles.input}
          value={props.value}
          onChangeText={props.onDataChanged}
          placeholder={props.placeholder}
          placeholderTextColor={themes.appTheme['text-hint']}
          secureTextEntry={secure}
          multiline={props.multiline}
        />
        {renderSecureAction()}
      </View>
    </View>
  );
};

const getStyle = (multiline: boolean) => {
  return StyleSheet.create({
    container: {},
    inputView: {
      justifyContent: multiline ? 'flex-start' : 'center',
      height: multiline ? 176 : 44,
      paddingHorizontal: 12,
      marginTop: 12,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: 'transparent',
      backgroundColor: themes.appTheme['bg-secondary'],
      textAlignVertical: 'top',
      paddingTop: multiline ? 12 : 0,
    },
    input: {
      padding: 0,
    },
    inputWithSecure: {
      paddingRight: 40,
    },
    error: {borderColor: themes.appTheme.danger},
    secureAction: {
      position: 'absolute',
      right: 12,
    },
    title: {
      color: themes.appTheme['bg-secondary-2'],
      fontSize: 20,
      fontWeight: '600',
    },
  });
};
