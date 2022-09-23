import React from 'react';
import s from "./FilterCheckboxes.module.css";
const FilterCheckboxes = () => {
  return (
    <div>
      <div className={s.checkboxes}>
        <div className='labelWrapper'>
          <input type="checkbox" className={s.checkbox} />
          <label className="label">Только с фото</label>
        </div>
        <div className='labelWrapper'>
          <input type="checkbox" className={s.checkbox} />
          <label className="label">Доставка в бокс</label>
        </div>
      </div>
      <div className={s.checkboxes}>
        <div className='labelWrapper'>
          <input type="radio" className={s.checkbox} />
          <label className="label">В наличии</label>
        </div>
        <div className='labelWrapper'>
          <input type="radio" className={s.checkbox} />
          <label className="label">На заказ</label>
        </div>
      </div>
    </div>
  );
};

export default FilterCheckboxes;