import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stateList } from '../../data';
import { filterByState } from '../../redux/actions/productsActions';
import StateCheckbox from '../StateCheckbox/StateCheckbox';
import s from "./StateCheckboxes.module.css";
const StateCheckboxes = ({ filterTitle }) => {

  return (
    <div>
      <div className="filterTitle">{filterTitle}</div>
      {stateList.map(({ id, title }) => (
        <StateCheckbox key={id} id={id} title={title} />
      ))}
    </div>
  );
};

export default StateCheckboxes;