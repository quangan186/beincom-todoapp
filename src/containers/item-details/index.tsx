import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import {themes} from '../../core';
import {Button, NavBar} from '../../components';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const ItemDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <ScrollView style={styles.container}>
      <NavBar
        title="ItemCardComponent1"
        onBackPress={() => {
          navigation.goBack();
        }}
        rightIcon="star"
        onRightPress={() => {}}
      />

      <Card style={styles.contentWrapper}>
        <View style={styles.header}>
          <Text style={styles.createdTime}>11/05/2024</Text>
          <View style={styles.btnWrapper}>
            <Button style={styles.editBtn} icon="edit" />
            <Button style={styles.delete} icon="delete" />
          </View>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          vel neque nec eleifend. Cras ac auctor metus, eu consequat metus.
          Etiam hendrerit pellentesque libero quis luctus. Maecenas vulputate
          tristique semper. Sed molestie ac nulla sed finibus. Vivamus lobortis
          sapien sed dui tempus, sit amet porta dolor volutpat. Cras pharetra,
          elit ac congue suscipit, metus mauris ornare ex, a euismod ante justo
          a metus. Nulla tellus magna, tempus ut scelerisque vel, molestie
          pharetra lorem. Fusce sit amet velit est. Curabitur vitae scelerisque
          neque. Proin mollis elit pretium enim rutrum, nec imperdiet purus
          eleifend. Phasellus at consequat enim. Duis condimentum, urna non
          blandit malesuada, nunc ipsum pharetra quam, at blandit tortor lacus
          in nisi. Donec quis malesuada tellus, eget ullamcorper augue. Integer
          vel posuere orci. Aliquam tristique suscipit efficitur. In eu velit
          laoreet, pretium mi eget, iaculis turpis. Vestibulum pretium porttitor
          erat ac laoreet. Maecenas tempor scelerisque augue. Nullam
          condimentum, dolor tristique semper volutpat, libero justo interdum
          nibh, nec fermentum diam ligula a risus. Mauris eget lorem aliquet
          libero posuere dignissim. Mauris sodales sollicitudin enim, ut
          consectetur tellus gravida at. Duis facilisis felis eget arcu faucibus
          interdum. Nam pulvinar ex aliquet diam faucibus, quis ultrices neque
          condimentum. Vestibulum pretium velit a lacus eleifend, non egestas
          leo porttitor. Praesent posuere felis a massa tincidunt lobortis.
          Vestibulum fringilla mauris vitae sem aliquet, non egestas orci
          blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla eu ultrices ante, nec blandit ante. Etiam a ex sodales,
          ultricies sapien vitae, finibus nisl. Sed ac est ultrices, ultricies
          dui id, faucibus leo. Suspendisse potenti. Aliquam semper eu diam
          vitae mollis. Vivamus nec venenatis tortor. Morbi tincidunt turpis ac
          justo viverra, in sagittis erat faucibus. Morbi euismod lorem sit amet
          lectus venenatis congue. Nulla dignissim ante id enim ornare, eu
          ornare enim aliquet. Quisque eu felis libero. In in luctus ligula, id
          tincidunt urna. Donec euismod leo ac diam gravida, quis ultricies
          lectus suscipit. Nunc libero nisi, suscipit id ligula sit amet,
          sagittis ornare est. Ut rhoncus imperdiet nulla a commodo. Vestibulum
          faucibus sollicitudin fringilla. Quisque vitae egestas tellus, nec
          placerat felis. Fusce bibendum enim et turpis rhoncus, quis tincidunt
          massa pharetra. Suspendisse mollis risus congue ligula auctor sodales.
          Aliquam lacinia dictum dictum. Integer mi erat, placerat vel egestas
          sit amet, laoreet vel turpis. Etiam ipsum sapien, maximus a tempus et,
          pharetra nec mauris. Sed quis ultricies nisi, at ultrices erat. Donec
          egestas posuere urna et maximus. Vivamus congue, ex non maximus
          auctor, nisi nulla dictum ipsum, in consequat massa ligula et neque.
        </Text>
      </Card>
    </ScrollView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.appTheme.primary,
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
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
  editBtn: {
    padding: 8,
    backgroundColor: themes.appTheme.secondary,
    borderRadius: 8,
  },
  delete: {
    padding: 8,
    backgroundColor: themes.appTheme.danger,
    borderRadius: 8,
  },
  createdTime: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'italic',
    color: themes.appTheme['text-main'],
  },
  contentWrapper: {
    marginHorizontal: 12,
    padding: 12,
    marginBottom: 16,
  },
});
