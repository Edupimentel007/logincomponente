import React from 'react';
import { View } from 'react-native';
import Login from './src/pages/Login';
import styles from './src/styles/StyleSheet';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
};

export default App;
