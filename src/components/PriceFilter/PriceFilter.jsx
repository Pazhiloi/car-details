import React, { useState } from 'react';
import s from "./PriceFilter.module.css";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { filterByRange } from '../../redux/actions/productsActions';
const PriceFilter = ({ value, setValue }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const handleChange = (e) => {
    setValue(e.target.value);
    const first = value[0] * 1000;
    const second = value[1] * 1000;
    dispatch(filterByRange(products, first, second));
  };
  return (
    <div>
      <div>
        <input type="text" value={value[0] * 1000} />
        <input type="text" value={value[1] * 1000} />
      </div>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default PriceFilter;