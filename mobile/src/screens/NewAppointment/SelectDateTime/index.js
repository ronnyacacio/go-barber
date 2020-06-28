import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../../services/api';
import { Background, DateInput } from '../../../components';
import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { provider } = route.params;

  useEffect(() => {
    (async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    })();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          extraData={date}
          keyExtractor={(hour) => hour.time}
          renderItem={({ item: hour }) => (
            <Hour
              onPress={() => handleSelectHour(hour.value)}
              enabled={hour.available}
            >
              <Title>{hour.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
