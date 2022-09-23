import React, { useState } from 'react';
import s from "./CustomSlider.module.css";
import { sliderList } from "../../data";
const CustomSlider = () => {
  const [left, setLeft] = useState(0)
  const [index, setIndex] = useState(0)
  const moveRight = () => {
    if (index >= sliderList.length - 1) {
      setIndex(0)
      setLeft(0)
    } else {
      setLeft((prev) => prev - 228);
      setIndex(prev => prev + 1)
    }
// increase -left
  }

  const moveLeft = () => {
    const lastItem = -228 * (sliderList.length - 1);
    if (index <= 0 ) {
      setIndex(sliderList.length - 1);
      setLeft(lastItem);
    }else{
      setLeft((prev) => prev + 228);
      setIndex((prev) => prev - 1);
    }
    // increase left
  }

  const setActive = (i) => {
    setIndex(i)
    setLeft(i * -228)
  }
  return (
    <div className={s.container}>
      <div style={{ left: `${left}px` }} className={s.wrapper}>
        <div className={s.slider}>
          {sliderList.map(({ id, img, price, title }) => (
            <div key={id} className={s.slide}>
              <img src={img} alt={title} className={s.img} />
              <div className={s.title}>{title}</div>
              <div className={s.price}>{price}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.circles}>
        {sliderList.map((item, i) => (
          <div onClick={() => setActive(i)} key={i} className={index === i ? s.active : s.circle}></div>
        ))}
      </div>
      <div className={s.buttons}>
        <button onClick={moveLeft} className={s.leftButton}>
          left
        </button>
        <button onClick={moveRight} className={s.rightButton}>
          right
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;