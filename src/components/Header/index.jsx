import React, { useContext } from 'react';

import { AuthContext } from '../../context/auth';

import './styles.css';

export function Header() {
  const { user } = useContext(AuthContext);

  return (
    <div className="header">
      <h1>Olá, {user.name}!</h1>
    </div>
  );
}
