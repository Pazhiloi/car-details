import React from 'react';
import { select1, select2, select3, select4 } from '../../data';
import Select from '../Option/Select';
import s from "./SearchForm.module.css";
const SearchForm = () => {
  return (
    <div className="container">
      <form className={s.form}>
        <div className={s.title}>подобрать детали</div>
        <div className={s.text}>
          найдите недостающие детали именно на ваше транспортное стредство
        </div>
        <div className={s.options}>
          <Select data={select1} title={`Год выпуска`} />
          <Select data={select2} title={`Марка`} />
          <Select data={select3} title={`Модель`} />
          <Select data={select4} title={`Тип кузова`} />
        </div>
        <button type="submit" className={s.button}>
          НАЙТИ ДЕТАЛИ
        </button>
      </form>
    </div>
  );
};

export default SearchForm;