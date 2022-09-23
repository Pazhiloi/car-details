import React from "react";
import { useSelector } from "react-redux";
import s from "./CompanyCheckboxes.module.css";
const CompanyCheckboxes = ({ filterTitle, setFilter }) => {
  const filters = useSelector((state) => state.products.filters);
  return (
    <div>
      <div className="filterTitle">{filterTitle}</div>
      {filters?.map((filter, i) => (
        <div
          key={i}
          data-index={i}
          className="labelWrapper"
          onClick={(e) => setFilter(e)}
        >
          <input
            data-index={i}
            id={filter.title}
            type="checkbox"
            checked={filter.status}
            onChange={(e) => setFilter(e)}
          />
          <label htmlFor={filter.name} className="label">
            {filter.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CompanyCheckboxes;
