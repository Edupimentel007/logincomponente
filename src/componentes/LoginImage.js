import React from 'react';
import { Image } from 'react-native';
import styles from '../styles/StyleSheet';

// Logo da página(logo do Santos FC)
const LoginImage = ({ source, style }) => {
  return <Image source={source} style={style} />;
};

export default LoginImage;

