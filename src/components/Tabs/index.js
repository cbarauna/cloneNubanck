import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, TabsContainer, TabItem, TabText,
} from './style';

export default function Tabs({ translatedY }) {
  return (
    <Container
      style={{
        transform: [
          {
            translatedY: translatedY.interpolate({
              inputRange: [0, 380],
              outputRange: [0, 30],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translatedY.interpolate({
          inputRange: [0, 380],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Indicação</TabText>
        </TabItem>

        <TabItem>
          <Icon name="chat-buble-outline" size={24} color="#FFF" />
          <TabText>Cobrar</TabText>
        </TabItem>

        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
