import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../style/colors';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0;
`;

export const EmptyCart = styled.Text`
  font-size: 24px;
  margin: 20px 0;
  font-weight: bold;
  align-self: center;
`;

export const ProductList = styled.View`
  background: #fff;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  padding: 16px;
  border-radius: 5px;
`;

export const ProductContainer = styled.View`
  width: 100%;
`;

export const Product = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 16px 0;
`;

export const ProductImage = styled.Image`
  height: 64px;
  width: 64px;
  align-self: center;
`;

export const ProductInfo = styled.View`
  flex-direction: column;
  padding: 8px;
  margin: 0 4px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 500;
  max-width: 200px;
  max-height: 50px;
  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: auto;
`;

export const RemoveProductButton = styled.TouchableOpacity`
  align-self: center;
`;

export const RemoveProduct = styled(MCIcon).attrs({
  name: 'trash-can-outline',
  size: 30,
})`
  color: ${colors.primary};
`;

export const Amount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border-radius: 5px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

export const AmountControl = styled.View`
  flex-direction: row;
`;

export const AmountInput = styled.TextInput.attrs({
  keyboardType: 'numeric',
  editable: false,
  maxLength: 2,
})`
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  padding: 2px 8px;
  background: #fff;
`;

export const Add = styled(Icon).attrs({
  name: 'add-circle-outline',
  size: 20,
})`
  color: ${colors.primary};
  margin-left: 4px;
`;

export const Remove = styled(Icon).attrs({
  name: 'remove-circle-outline',
  size: 20,
})`
  color: ${colors.primary};
  margin-right: 4px;
`;

export const AmountTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
`;

export const Total = styled.View`
  flex-direction: column;
  align-content: center;
  padding: 12px 0;
`;

export const TextTotal = styled.Text`
  color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  align-self: center;
`;

export const ValueTotal = styled.Text`
  margin: 8px 0;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
`;

export const EndButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  padding: 12px 64px;
  margin-top: 16px;
  border-radius: 5px;
  background: ${colors.primary};
`;

export const EndButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const EmptyCartIcon = styled(MCIcon).attrs({
  name: 'cart-off',
  size: 120,
})`
  color: rgba(0, 0, 0, 0.1);
`;
