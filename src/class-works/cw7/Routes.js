import { Container, Header, Menu } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React from "react";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import CartIcon from "./components/CartIcon";
import Register from "./containers/Register";
import NotFoundPage from "./containers/404";

export default function Blog() {
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
        </Header>
        <Menu>
          <NavLink as='button' to='/signup' exact className='item' activeClassName='active-nav'>
            Join Us
          </NavLink>
          <NavLink to='/' exact className='item' activeClassName='active-nav'>Products</NavLink>
          <NavLink to='/cart' className='item' activeClassName='active-nav'>
            <CartIcon />
          </NavLink>
        </Menu>
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/signup' exact component={Register} />
          <Route path='/cart' component={Cart} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </Container>
  )
}
