import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

// import { Nav } from './components/Nav';
import { RoutesApp } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
