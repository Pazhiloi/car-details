import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByState } from '../../redux/actions/productsActions';
import s from "./StateCheckbox.module.css";
const StateCheckbox = ({ title }) => {
const checkboxState = useSelector((state) => state.products.checkboxState);
const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const handleClick = (e) => {
      const value = e.target.value;
      dispatch(filterByState(value, products));
    };
  
  return (
    <div className="labelWrapper">
      <input
        value={title}
        onChange={handleClick}
        checked={title === checkboxState ? true : false}
        type="checkbox"
      />
      <label className="label">{title}</label>
    </div>
  );
};

export default StateCheckbox;