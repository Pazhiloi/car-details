import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortList } from '../../data';
import { filterBySort } from '../../redux/actions/productsActions';
import s from "./SortCheckboxes.module.css";
const SortCheckboxes = ({ filterTitle }) => {
  const sortState = useSelector((state) => state.products.sortState);
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const value = e.target.value;
    dispatch(filterBySort(value, products));
  }
  return (
    <div>
      <div className="filterTitle">{filterTitle}</div>
      {sortList.map(({ id, title }) => (
        <div key={id} className="labelWrapper">
          <input
            checked={title === sortState ? true : false}
            value={title}
            onChange={handleClick}
            type="checkbox"
          />
          <label className="label">{title}</label>
        </div>
      ))}
    </div>
  );
};

export default SortCheckboxes;