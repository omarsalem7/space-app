import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './header.css';

const Header = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    color: 'rgb(85, 85, 85)',
    fontSize: '0.9rem',
  };
  return (
    <div className="header-container">
      <ul className="header">
        <li>
          <img src={logo} alt="plant logo" className="img-logo" />
        </li>
        <li className="header-item"> Books Store</li>
      </ul>
      <ul className="header">
        <li>
          <NavLink style={linkStyle} to="/">
            BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink style={linkStyle} to="/categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;