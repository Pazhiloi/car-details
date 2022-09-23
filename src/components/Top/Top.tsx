import React from 'react';
import s from './Top.module.css'
const Top = () => {
  return (
    <div className={s.top}>
      <div className={"container"}>
        <div className={s.inner}>
          <div className={s.location}>
            <div className={s.town}>Алматы</div>
          </div>
          <div className={s.text}>
            Бесплатная доставка заказов до конца декабря!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;