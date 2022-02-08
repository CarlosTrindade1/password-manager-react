import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { IoMailSharp } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';

import api from '../../services/api';
import { AuthContext } from '../../context/auth';

import './styles.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function signIn() {
    try {
      const response = await api.post('/token', { email, password });

      const { token, user } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem(
        '@password-manager',
        JSON.stringify({ token, user })
      );

      setUser(user);

      navigate('/dashboard');
    } catch (error) {
      toast.error('Usuário ou senha inválidos.');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formError = false;

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formError = true;
    }

    if (password.length < 8 || password.length > 50) {
      toast.error('A senha precisa ter entre 8 e 50 caracteres');
      formError = true;
    }

    if (formError) return;

    signIn();
  }

  return (
    <div className="login">
      <div className="login-container">
        <div>
          <h1>
            <span>Lo</span>gin
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <IoMailSharp size={28} color="#695CFE" />
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Digite o seu e-mail"
              />
            </div>
            <div className="login-input">
              <FaLock size={28} color="#695CFE" />
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Digite a sua senha"
              />
            </div>
            <p>
              <a href="/">Esqueceu a senha?</a>
            </p>
            <button type="submit">Entrar</button>
          </form>
          <div className="login-register">
            <p>
              Não possui uma conta? <a href="/">Registre-se agora</a>
            </p>
          </div>
        </div>
      </div>

      <div className="login-container login-image">
        <div className="login-image-text">
          <span>Segurança</span>
        </div>
      </div>
    </div>
  );
}
