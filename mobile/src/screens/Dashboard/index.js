import React from 'react';

import { Background, Appointment } from '../../components';
import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item: appointment }) => (
            <Appointment data={appointment} />
          )}
        />
      </Container>
    </Background>
  );
}
