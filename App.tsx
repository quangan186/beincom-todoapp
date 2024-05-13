import React from 'react';
import {AppNavigator} from './src/core';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <RootSiblingParent>
      <AppNavigator />
    </RootSiblingParent>
  );
};

export default App;
