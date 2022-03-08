import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import './header.css';

const Header = () => {
  const linkStyle = {
    margin: '1rem',
    textDecoration: 'none',
    fontSize: '0.9rem',
    color: 'rgb(24, 159, 250)',
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
            Rockets
          </NavLink>
        </li>

        <li>
          <NavLink style={linkStyle} to="/missions">
            Missions
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink style={linkStyle} to="/profile">
            My profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
