import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Background, Appointment } from '../../components';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('appointments');

      setAppointments(response.data);
    })();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments((prevState) =>
      prevState.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
