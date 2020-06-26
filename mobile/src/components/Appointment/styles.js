import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  font-size: 13px;
  color: #999;

  margin-top: 4px;
`;

export const Button = styled.TouchableOpacity``;

export const IconEvent = styled(MaterialIcons).attrs({
  name: 'event-busy',
  size: 20,
  color: '#f64c75',
})``;
