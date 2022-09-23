import React from 'react';
import Products from '../../components/Products/Products';
import Sidebar from '../../components/Sidebar/Sidebar';
import s from "./CatalogPage.module.css";
const CatalogPage = ({ setFilter }) => {
  return (
    <>
      <div className="container">
        <div className="title">Колодки тормозные дисковые</div>
        <div className={s.inner}>
          <Sidebar
            setFilter={setFilter}
          />
          <Products />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;