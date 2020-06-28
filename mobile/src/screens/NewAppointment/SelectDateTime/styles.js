import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

const { statusBarHeight } = Constants;

export const Container = styled.View`
  flex: 1;
  margin-top: ${statusBarHeight}px;
`;

export const HourList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
})`
  padding: 0 20px;
`;

export const Hour = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  margin: 0 10px 20px;

  flex: 1;
  align-items: center;

  opacity: ${({ enabled }) => (enabled ? 1 : 0.6)};
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;
