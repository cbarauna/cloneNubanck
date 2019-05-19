import React from 'react';

import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './style';

export default function Menu({ translatedY }) {
  return (
    <Container
      style={{
        opacity: translatedY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode value="http://google.com.br" size={80} bgColor="#8B10AE" fgColor="#FFF" />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me Ajuda </NavText>
        </NavItem>

        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações</NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Cartão</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
