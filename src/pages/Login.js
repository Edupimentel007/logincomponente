// Importando os componentes
import React from 'react';
import { View } from 'react-native';
import LoginButton from '../componentes/LoginButton';
import LoginImage from '../componentes/LoginImage';
import LoginImageBackground from '../componentes/LoginImageBackground';
import LoginText from '../componentes/LoginText';
import LoginInput2 from '../componentes/LoginInput';
import styles from '../styles/StyleSheet';

const Login = () => {
  return (
    // Imgagem de Fundo
    <LoginImageBackground source={{ uri: 'https://static.poder360.com.br/2022/11/pele-3.jpeg' }} style={styles.backgroundImage}>
      
      <View style={styles.container}>

    {/* Imagem de Logo */}
        <LoginImage source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/768px-Santos_Logo.png' }} style={styles.logo} />

      {/* Usuário */}
        <LoginText style={styles.label}>Usuário</LoginText>

      {/* Caixa de texto para digitação do usuário */}
        <LoginInput2 placeholder="Digite seu usuário" />

      {/* Senha */}
        <LoginText style={styles.label}>Senha</LoginText>

      {/* Caixa de texto para digitação de senha */}
        <LoginInput2 placeholder="Digite sua senha" secureTextEntry={true} />

      {/* COmando para botão de login */}
        <LoginButton onPress={() => console.log("Botão de login pressionado")} />


      </View>

    </LoginImageBackground>
  );
};

export default Login;



