import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => (
  <header>
    <div className="center-column">
      <h1>你好，微前端！</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">微应用 A</NavLink>
        </li>
        <li>
          <NavLink to="/app-b">微应用 B</NavLink>
        </li>
        <li>
          <NavLink to="/about">容器内嵌应用 C</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default Header;