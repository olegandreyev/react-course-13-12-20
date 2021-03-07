import { Container, Header } from "semantic-ui-react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import Register from "./containers/Register";
import NotFoundPage from "./containers/404";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/slices/products";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import { getCurrentAuthState } from "./redux/selectors/auth";
import DimmerLoader from "../../home-works/hw4/blog-v2/components/DimmerLoader";
import { fetchSession } from "./redux/slices/auth";
import ProtectedRoute from "./components/ProtectedRoute";

export default function Blog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSession());
  }, []);
  const { hasLoaded } = useSelector(getCurrentAuthState);
  if (!hasLoaded) {
    return <DimmerLoader active={true} />
  }
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/' activeClassName='active-nav'>Shop</NavLink>
        </Header>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/signup' exact>
            <Register />
          </Route>
          <Route path='/signin' exact >
            <Login />
          </Route>
          <ProtectedRoute path='/products' exact>
            <Products />
          </ProtectedRoute>
          <ProtectedRoute path='/cart' exact>
            <Cart />
          </ProtectedRoute>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}
