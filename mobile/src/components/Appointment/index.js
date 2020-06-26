import React from 'react';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
  Button,
  IconEvent,
} from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatars/50/avatar.png' }}
        />

        <Info>
          <Name>Ronny Acácio</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <Button onPress={() => {}}>
        <IconEvent />
      </Button>
    </Container>
  );
}
