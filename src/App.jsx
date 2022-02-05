import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context/auth';

import './App.css';

// import { Nav } from './components/Nav';
import { RoutesApp } from './routes';

function App() {
  const user = useContext(AuthContext);

  return (
    <div className="App">
      {user.name}
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
