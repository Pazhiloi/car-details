import React from 'react';
import { banner, transmission, wheel } from '../../data';
import s from './Footer.module.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className={s.top}>
          <img src={wheel} className={s.image} alt="wheel" />
          <div className={s.wrapper}>
            <div className={s.title}>Начните продавать на EZY Parts!</div>
            <button className={s.button}>СТАТЬ ПРОДАВЦОМ</button>
          </div>
          <img src={transmission} className={s.image} alt="wheel" />
        </div>
      </div>
      <div className={s.center}>
        <img src={banner} alt="banner" />
      </div>
    </footer>
  );
};

export default Footer;