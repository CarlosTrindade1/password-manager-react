import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Nav } from '../components/Nav';

export function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Nav />} />
    </Routes>
  );
}
