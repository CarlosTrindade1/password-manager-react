import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { BiSave } from 'react-icons/bi';

import { AuthContext } from '../../context/auth';
import api from '../../services/api';

import { Nav } from '../../components/Nav';
import { Header } from '../../components/Header';

import './styles.css';

export function Dashboard() {
  const [upperCase, setUpperCase] = useState(false);
  const [tiny, setTiny] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbols] = useState(false);
  const [password, setPassword] = useState('');
  const [toggleForm, setToggleForm] = useState(false);
  const [account, setAccount] = useState('');

  const { user } = useContext(AuthContext);

  const rand = (max, min) => Math.floor(Math.random() * (max - min) + min);

  const makeUpperCase = () => String.fromCharCode(rand(65, 91));
  const makeTiny = () => String.fromCharCode(rand(97, 123));
  const makeNumber = () => String.fromCharCode(rand(48, 58));
  const symbols = '!@#$%&*=+-_.;^~()[]!?:,';
  const makeSymbols = () => symbols[rand(0, symbols.length)];

  function handleSelect(event) {
    setAccount(event.target.options[event.target.selectedIndex].value);
  }

  function makePassword(event) {
    event.preventDefault();

    if (!upperCase && !tiny && !numbers && !symbol) {
      return toast.error('Escolha ao menos uma opção');
    }

    const passwordArray = [];

    const qtd = 20;

    // eslint-disable-next-line
    for (let i = 0; i < qtd; i++) {
      if (upperCase) {
        passwordArray.push(makeUpperCase());
      }
      if (tiny) {
        passwordArray.push(makeTiny());
      }
      if (numbers) {
        passwordArray.push(makeNumber());
      }
      if (symbol) {
        passwordArray.push(makeSymbols());
      }
    }

    return setPassword(passwordArray.join('').slice(0, qtd));
  }

  async function handleSavePassword(event) {
    event.preventDefault();

    try {
      const createdPassword = await api.post('/password/', {
        password,
        account,
        userId: user.id,
      });

      console.log(createdPassword);
    } catch (error) {
      toast.error('Erro inesperado.');
    }
  }

  return (
    <div className="grid-container">
      <Nav />
      <Header />
      <div className="dashboard">
        <div className="password-form">
          <h2>Gerador de senha</h2>
          <form>
            <div className="password-form-input">
              <p>{password}</p>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setToggleForm(!toggleForm);
                }}
              >
                <BiSave size={20} />
              </button>
            </div>
            {toggleForm ? (
              <div className="password-form-input-account">
                <p>Conta:</p>
                <select type="select" onChange={handleSelect}>
                  <option value="" selected disabled hidden>
                    Escolha uma opção
                  </option>
                  <option value="facebook">Facebook</option>
                  <option value="twitter">Twitter</option>
                  <option value="google">Google</option>
                  <option value="E-mail">E-mail</option>
                </select>
              </div>
            ) : (
              <div>
                <div className="two-columns-form">
                  <div className="password-form-checkbox">
                    <p>Maiúsculas:</p>
                    <input
                      type="checkbox"
                      onChange={(event) => setUpperCase(event.target.checked)}
                    />
                  </div>
                  <div className="password-form-checkbox">
                    <p>Minúsculas:</p>
                    <input
                      type="checkbox"
                      onChange={(event) => setTiny(event.target.checked)}
                    />
                  </div>
                </div>
                <div className="two-columns-form">
                  <div className="password-form-checkbox">
                    <p>Números:</p>
                    <input
                      type="checkbox"
                      onChange={(event) => setNumbers(event.target.checked)}
                    />
                  </div>
                  <div className="password-form-checkbox">
                    <p>Símbolos:</p>
                    <input
                      type="checkbox"
                      onChange={(event) => setSymbols(event.target.checked)}
                    />
                  </div>
                </div>
              </div>
            )}
            {toggleForm ? (
              <button type="button" onClick={handleSavePassword}>
                Salvar senha
              </button>
            ) : (
              <button type="button" onClick={makePassword}>
                Gerar senha
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
