import React from 'react';
import Menu from '../Menu/Menu';
import Top from '../Top/Top';
import "./Header.module.css";
const Header = () => {
  return (
    <header className='header'>
      <Top/>
      <Menu/>
    </header>
  );
};

export default Header;