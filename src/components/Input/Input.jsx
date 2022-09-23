import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clock, search } from '../../data';
import { filterByText } from '../../redux/actions/productsActions';
import s from "./Input.module.css";
const Input = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(filterByText(value, products))
  }; 
  return (
    <div className={s.wrapper}>
      <input
        placeholder="Введите номер детали, название или VIN"
        type="text"
        className={s.input}
        onChange={handleChange}
      />
      <div className={s.imageWrapper}>
        <img src={clock} alt="clock" className={s.image} />
        <img src={search} alt="search" className={s.image} />
      </div>
    </div>
  );
};

export default Input;