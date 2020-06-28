import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${statusBarHeight}px;
`;

export const ProviderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  margin: 0 10px 20px;
  padding: 20px;
  flex: 1;

  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
