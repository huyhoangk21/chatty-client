import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContextState } from '../contexts/AuthProvider';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { username } = useContext(AuthContextState);
  return (
    <Route
      {...otherProps}
      render={props =>
        username ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

export default PrivateRoute;
