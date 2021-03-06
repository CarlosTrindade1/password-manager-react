import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { PrivateRoute } from './privateRoute';
import { Page404 } from '../pages/Page404';

export function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<PrivateRoute isClosed />}>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
