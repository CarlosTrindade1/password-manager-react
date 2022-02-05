import React from 'react';
import { IoMailSharp } from 'react-icons/io5';
import { FaLock } from 'react-icons/fa';

import './styles.css';

export function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div>
          <h1>
            <span>Lo</span>gin
          </h1>

          <form>
            <div className="login-input">
              <IoMailSharp size={28} color="#695CFE" />
              <input type="email" placeholder="Digite o seu e-mail" />
            </div>
            <div className="login-input">
              <FaLock size={28} color="#695CFE" />
              <input type="password" placeholder="Digite a sua senha" />
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
