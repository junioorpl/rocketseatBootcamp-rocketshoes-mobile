import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  Title,
  Price,
  AddToCartButton,
  ButtonText,
} from './styles';

export default function Main() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(p => ({
        ...p,
        formattedPrice: formatPrice(p.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      {products.map(p => (
        <Product key={p.id}>
          <ProductImage source={{ uri: p.image }} />
          <Title>{p.title}</Title>
          <Price>{p.formattedPrice}</Price>
          <AddToCartButton onPress={() => handleAddProduct(p.id)}>
            <Icon
              name="add-shopping-cart"
              size={30}
              color="#FFF"
              style={{ margin: 8 }}
            />
            <ButtonText>Adicionar ao Carrinho</ButtonText>
          </AddToCartButton>
        </Product>
      ))}
    </Container>
  );
}
