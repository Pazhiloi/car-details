import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySelect } from '../../redux/actions/productsActions';
import s from "./Select.module.css";
const Select = ({title, data}) => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.products)
  const handleClick = (e) => {
    e.preventDefault()
    const value = e.target.value;
    dispatch(filterBySelect(value, products));
  }
  return (
    <select
      onChange={(e) => handleClick(e)}
      name="select"
      className={s.select}
      defaultValue={title}
    >
      <option>{title}</option>
      {data.map(({ id, value }) => (
        <option className={s.option} key={id} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default Select;