import React from "react";
import s from "./Slide.module.css";
import { slider } from "../../data";
const Slide = ({ id, img, setImage, idx, setIdx }) => {
  const handleClick = () => {
     setImage(slider[id].img);
     setIdx(id);
  }
  const style = {
    border: 0
  }
  const activeStyle = {
    border: "1px solid #E11C43",
  };
  return (
    <div style={id === idx ? activeStyle : style}>
      <img onClick={handleClick} className={s.img} src={img} alt="" />
    </div>
  );
};

export default Slide;
