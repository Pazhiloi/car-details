import React from 'react';
import { Link } from 'react-router-dom';
import { navList } from '../../data';
import s from './Nav.module.css'

const Nav = () => {
  return (
    <div className={s.navList}>
      {navList.map(({ id, title, link }) => (
        <Link to={link} key={id} className={s.link}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;