import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, HomeButton, Logo, Cart, Items } from './styles';

import logo from '../../assets/img/logo.png';

function Header({ navigation, cartSize }) {
  Icon.loadFont();
  return (
    <Container>
      <HomeButton onPress={() => navigation.navigate('Main')}>
        <Logo source={logo} />
      </HomeButton>
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={30} color="#fff" />
        <Items>{cartSize || 0}</Items>
      </Cart>
    </Container>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
