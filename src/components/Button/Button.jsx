import React from 'react';
import s from "./Button.module.css";
const Button = ({text, bg, color, width, border}) => {
  const borderStyle = {
    backgroundColor: bg,
    color,
    width,
    border: '1px solid #E11C43',
  };
  const style = {
    backgroundColor: bg,
    color,
    width,
  }
  return (
    <button style={border ? borderStyle : style} className={s.button}>
      {text}
    </button>
  );
};

export default Button;