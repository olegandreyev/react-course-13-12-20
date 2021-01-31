import React from 'react';
import CardList from '../components/CartList';
import { Header } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const productsInCart = cart.map(cartItem => {
    const { id, img, price, title } = products.find(product => product.id === cartItem.id);
    return {
      id, count: cartItem.count, img, price, title
    }
  });

  if (cart.length === 0) {
     return (
       <Header as='h2'>Go and <Link to='/'>buy</Link> something</Header>
     )
  }

  return (
    <CardList cartProducts={productsInCart} />
  );
}

export default Cart;
