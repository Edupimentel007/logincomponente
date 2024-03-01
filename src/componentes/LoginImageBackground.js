import React from 'react';
import { ImageBackground } from 'react-native';

const LoginImageBackground = ({ source, style, children }) => {
  return <ImageBackground source={source} style={style}>{children}</ImageBackground>;
};

export default LoginImageBackground;
