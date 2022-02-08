import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export function PrivateRoute({ isClosed }) {
  const localStorageData = JSON.parse(
    localStorage.getItem('@password-manager')
  );

  if (!localStorageData) return <Navigate to="/" />;

  let isLoggedIn = false;

  if (Object.values(localStorageData.user).length !== 0) {
    isLoggedIn = true;
  }

  if (isClosed && !isLoggedIn) {
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
