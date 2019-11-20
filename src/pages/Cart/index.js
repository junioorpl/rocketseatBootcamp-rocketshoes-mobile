import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  EmptyCart,
  ProductList,
  ProductContainer,
  Product,
  ProductImage,
  ProductInfo,
  Title,
  Price,
  RemoveProductButton,
  RemoveProduct,
  Amount,
  AmountControl,
  AmountInput,
  Add,
  Remove,
  AmountTotal,
  Total,
  TextTotal,
  ValueTotal,
  EndButton,
  EndButtonText,
  EmptyCartIcon,
} from './styles';
import { formatPrice } from '../../util/format';

export default function Cart() {
  MCIcon.loadFont();
  Icon.loadFont();

  const cart = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subtotal: formatPrice(p.amount * p.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, p) => {
        console.tron.log(total);
        return totalSum + p.price * p.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function add(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function reduce(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function renderCart() {
    return cart.map(p => (
      <ProductContainer key={p.id}>
        <Product>
          <ProductImage source={{ uri: p.image }} />
          <ProductInfo>
            <Title>{p.title}</Title>
            <Price>{p.formattedPrice}</Price>
          </ProductInfo>
          <RemoveProductButton
            onPress={() => dispatch(CartActions.removeFromCart(p.id))}
          >
            <RemoveProduct />
          </RemoveProductButton>
        </Product>
        <Amount>
          <AmountControl>
            <TouchableOpacity onPress={() => reduce(p)}>
              <Remove />
            </TouchableOpacity>
            <AmountInput value={String(p.amount)} />
            <TouchableOpacity onPress={() => add(p)}>
              <Add />
            </TouchableOpacity>
          </AmountControl>
          <AmountTotal>{p.subtotal}</AmountTotal>
        </Amount>
      </ProductContainer>
    ));
  }

  return (
    <Container>
      {cart.length !== 0 ? (
        <ProductList>
          {renderCart()}
          <Total>
            <TextTotal>TOTAL</TextTotal>
            <ValueTotal>{total}</ValueTotal>
            <EndButton>
              <EndButtonText>Finalizar Pedido</EndButtonText>
            </EndButton>
          </Total>
        </ProductList>
      ) : (
        <ProductList>
          <EmptyCartIcon />
          <EmptyCart>Seu carrinho está vazio.</EmptyCart>
        </ProductList>
      )}
    </Container>
  );
}
