import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (<header className="App-header">
    <p>Car Catalog</p>
    <nav>
      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/search'>Search</Link></li>
      </ul>
    </nav>
  </header>);
};

export default Header;
