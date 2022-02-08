import React, { useContext, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthContext } from './context/auth';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { RoutesApp } from './routes';

function App() {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const localStorageObject = JSON.parse(
      localStorage.getItem('@password-manager')
    );

    if (localStorageObject) {
      setUser(localStorageObject.user);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <RoutesApp />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </div>
  );
}

export default App;
