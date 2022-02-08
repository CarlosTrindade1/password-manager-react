import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    // eslint-disable-next-line
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
