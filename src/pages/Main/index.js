import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandle, State } from 'react-native-gesture-handler';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './style';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

export default function Main() {
  let offset = 0;
  const translatedY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translatedY,
        },
      },
    ],
    { useNativeDriver: true },
  );
  function onHangleStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translateY } = event.nativeEvent;
      offset += translateY;

      if (translateY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translatedY} />

        <PanGestureHandle onGestureEvent={animatedEvent} onHangleStateChange={onHangleStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translatedY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Icon name="atach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponivel</Title>
              <Description>R$ 197.611,00</Description>
            </CardContent>

            <CardFooter>
              <Annotation>Transferencia de R$ 10.000,00 recebida</Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandle>
      </Content>

      <Tabs translateY={translatedY} />
    </Container>
  );
}
