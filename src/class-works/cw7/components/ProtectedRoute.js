import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getCurrentAuthState } from "../redux/selectors/auth";

function ProtectedRoute({ children, ...rest }) {
  const auth = useSelector(getCurrentAuthState);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
