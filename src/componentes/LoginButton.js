import React from 'react';
import { Button } from 'react-native';
import styles from '../styles/StyleSheet';

// Botão de Login
const LoginButton = ({ onPress }) => {
  return <Button title="Login" onPress={onPress} />;
};

export default LoginButton;

