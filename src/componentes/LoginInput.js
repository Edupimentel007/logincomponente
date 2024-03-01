import React from 'react';
import { TextInput, View } from 'react-native';
import styles from '../styles/StyleSheet';

const LoginInput2 = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
  //  Campo de digitação para Usuario e Senha
   <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default LoginInput2;

