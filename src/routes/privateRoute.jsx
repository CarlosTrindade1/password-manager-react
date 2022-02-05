import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context/auth';

export function PrivateRoute({ isClosed }) {
  const { user } = useContext(AuthContext);

  if (isClosed && !user.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

PrivateRoute.defaultProps = {
  isClosed: false,
};

PrivateRoute.propTypes = {
  isClosed: PropTypes.bool,
};
