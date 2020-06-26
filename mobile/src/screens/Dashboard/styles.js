import styled from 'styled-components/native';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: ${statusBarHeight + 30}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
