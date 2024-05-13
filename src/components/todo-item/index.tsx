import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {ItemModel, themes, useFormatter} from '../../core';
import {Button} from '../button';

interface Props extends TouchableOpacityProps {
  item: ItemModel;
  onLikePress: (item: ItemModel) => void;
}

export const ItemCardComponent = (props: Props) => {
  const {datetimeStringISOToString} = useFormatter();

  return (
    <TouchableOpacity style={[styles.container, props.style]} {...props}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {props.item.title}
        </Text>
        <View style={styles.btnWrapper}>
          <Button
            style={styles.likeBtn}
            icon="star"
            isActive={props.item.isLiked}
            onPress={() => props.onLikePress(props.item)}
          />
        </View>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {props.item.description}
      </Text>

      <Text style={[styles.description, styles.createdTime]} numberOfLines={1}>
        {`Created at: ${datetimeStringISOToString(props.item.createdAt)}`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 16,
    backgroundColor: themes.appTheme['bg-secondary'],
    borderRadius: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWrapper: {
    gap: 8,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    color: themes.appTheme['text-main'],
  },
  description: {
    fontSize: 16,
    color: themes.appTheme['text-main'],
  },
  likeBtn: {
    padding: 8,
    backgroundColor: themes.appTheme.primary,
    borderRadius: 8,
  },
  createdTime: {
    fontStyle: 'italic',
  },
});
