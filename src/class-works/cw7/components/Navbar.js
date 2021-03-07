import React from 'react';
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentAuthState } from "../redux/selectors/auth";
import { logout } from "../redux/slices/auth";

function Navbar(props) {
  const dispatch = useDispatch();
  const { user } = useSelector(getCurrentAuthState);
  const onClickLogout = () => dispatch(logout());
  return (
    <Menu>
      {!user &&
      <NavLink as='button' to='/signup' exact className='item' activeClassName='active-nav'>
        Sign Up
      </NavLink>
      }
      {!user &&
      <NavLink as='button' to='/signin' exact className='item' activeClassName='active-nav'>
        Sign In
      </NavLink>
      }
      {user && <NavLink to='/products' exact className='item' activeClassName='active-nav'>Products</NavLink> }
      {user &&
      <NavLink to='/cart' className='item' activeClassName='active-nav'>
        <CartIcon/>
      </NavLink>
      }
      {user &&
      <Menu.Menu position='right'>
        <Menu.Item
          name='logout'
          onClick={onClickLogout}
        />
      </Menu.Menu>
      }
    </Menu>
  );
}

export default Navbar;
