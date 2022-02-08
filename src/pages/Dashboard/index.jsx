import React from 'react';

import { Nav } from '../../components/Nav';
import { Header } from '../../components/Header';

import './styles.css';

export function Dashboard() {
  return (
    <div className="grid-container">
      <Nav />
      <Header />
    </div>
  );
}
