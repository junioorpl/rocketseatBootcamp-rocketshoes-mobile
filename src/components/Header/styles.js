import styled from 'styled-components/native';
import colors from '../../style/colors';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.dark};
`;
export const HomeButton = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  height: 24px;
  width: 185px;
`;

export const Cart = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
`;

export const Items = styled.Text`
  font-size: 20px;
  color: #fff;
`;
