import React from 'react';
import { ImageBackground } from 'react-native';

// Imagem de fundo
const LoginImageBackground = ({ source, style, children }) => {
  return <ImageBackground source={source} style={style}>{children}</ImageBackground>;
};

export default LoginImageBackground;
