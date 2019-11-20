import styled from 'styled-components/native';
import colors from '../../style/colors';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
})`
  flex: 1;
  padding: 0;
`;

export const Product = styled.View`
  flex-direction: column;
  margin: 30px;
  padding: 16px;
  background: #fff;
  min-width: 330px;
  max-width: 330px;
  max-height: 500px;
  border-radius: 5px;
`;

export const ProductImage = styled.Image`
  width: 260px;
  height: 260px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding: 0 20px;
`;

export const Price = styled.Text`
  font-size: 30px;
  padding: 0 20px;
  margin-top: auto;
  font-weight: bold;
`;

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  background: ${colors.primary};
  height: 64px;
  margin: 8px;
  margin-top: auto;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  justify-content: space-evenly;
`;

export const ButtonText = styled.Text`
  align-self: center;
  margin: 0 16px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;
