import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close, grid, list, select5 } from '../../data';
import { resetAll, resetFilters } from '../../redux/actions/productsActions';
import CompanyCheckboxes from '../CompanyCheckboxes/CompanyCheckboxes';
import FilterCheckboxes from '../FilterCheckboxes/FilterCheckboxes';
import Select from '../Option/Select';
import PriceFilter from '../PriceFilter/PriceFilter';
import SortCheckboxes from '../SortCheckboxes/SortCheckboxes';
import StateCheckboxes from '../StateCheckboxes/StateCheckboxes';
import VariantCheckbox from '../VariantCheckbox/VariantCheckbox';
import s from "./Sidebar.module.css";
const Sidebar = ({  setFilter }) => {
  const [value, setValue] = useState([0, 1000]);
  const dispatch = useDispatch()
  const filters = useSelector(state => state.products.filters)
  const reset = () => {
    dispatch(resetAll())
    dispatch(resetFilters(filters));
    setValue([0, 1000])
  }
  return (
    <div>
      <div className={s.variantCheckboxes}>
        <VariantCheckbox title="list" img={list} />
        <VariantCheckbox title="grid" img={grid} />
      </div>
      <div className={s.select}>
        <Select data={select5} title={`Киев`} />
      </div>
      <div className="labelWrapper">
        <input type="checkbox" className={s.checkbox} />
        <label className={s.label}>Доставка из других регионов</label>
      </div>
      <div className={s.priceWrapper}>
      <PriceFilter value={value} setValue={setValue}/>
      </div>
      <div className={s.checkboxes}>
        <CompanyCheckboxes setFilter={setFilter} filterTitle="Производитель" />
      </div>
      <div className={s.checkboxes}>
        <StateCheckboxes filterTitle="Состяние" />
      </div>
      <div className={s.checkboxes}>
        <SortCheckboxes filterTitle="Сортировать" />
      </div>
      <div className={s.checkboxes}>
        <FilterCheckboxes />
      </div>
      <div onClick={reset} className={s.resetFilter}>
        <div className={s.button}>
          <img src={close} alt="reset filter" />
        </div>
        <span className={s.span}>Сбросить фильтры</span>
      </div>
    </div>
  );
};

export default Sidebar;