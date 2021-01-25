import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './blog-v2.css';
import { Container, Header, Menu  } from 'semantic-ui-react';
import { BrowserRouter as Router, NavLink, Switch, Route, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import Users from "./containers/Users";
import About from "./containers/About";
import UserDetails from "./containers/UserDetails";
import NotFound from "./containers/NotFound";

function AnimatedSwitch() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames='fade'
      >
        <Switch location={location}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/users/:userId'>
            <UserDetails />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default function BlogV2 () {
  return (
    <Container>
      <Router>
        <Header>
          <NavLink to='/'>Blog v2</NavLink>
        </Header>
        <Menu>
          <NavLink to='/users' className='item'>Users</NavLink>
          <NavLink to='/about' className='item'>About</NavLink>
        </Menu>
        <AnimatedSwitch />
      </Router>
    </Container>
  )
}
