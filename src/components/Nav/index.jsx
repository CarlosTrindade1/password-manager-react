import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaLock, FaSearch } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsGoogle, BsFacebook } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';

import { AuthContext } from '../../context/auth';

import './styles.css';

export function Nav() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  function signOut(event) {
    event.preventDefault();

    setUser({});
    localStorage.removeItem('@password-manager');

    navigate('/');
  }

  return (
    <nav className="navbar">
      <header>
        <div className="image-navbar">
          <span>
            <FaLock size={42} color="#695CFE" />
          </span>
        </div>
        <div className="navbar-text">
          <span className="text-main">Password Manager</span>
          <span className="text-second">Security</span>
        </div>
      </header>

      <li>
        <div className="navbar-search">
          <span>
            <FaSearch color="#707070" size={20} />
          </span>
          <input type="search" placeholder="Pesquisar..." />
        </div>
      </li>

      <ul className="navbar-menu">
        <li>
          <Link to="/dashboard" className="menu-item">
            <AiOutlineHome size={28} className="menu-link-icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <a href="/" className="menu-item">
            <BsTwitter size={28} className="menu-link-icon" />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="/" className="menu-item">
            <BsGoogle size={28} className="menu-link-icon" />
            <span>Google</span>
          </a>
        </li>
        <li>
          <a href="/" className="menu-item">
            <BsFacebook size={28} className="menu-link-icon" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="/" className="menu-item">
            <AiOutlineMail size={28} className="menu-link-icon" />
            <span>E-mail</span>
          </a>
        </li>
      </ul>

      <hr />
      <footer>
        <button type="button" onClick={signOut} className="footer-logout">
          <BiLogOut size={28} className="footer-logout-icon" />
          <span>Sair</span>
        </button>
      </footer>
    </nav>
  );
}
