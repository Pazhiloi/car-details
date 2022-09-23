import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product/Product';

import s from "./GridVariant.module.css";
const GridVariant = () => {
  const products = useSelector(state => state.products.filteredProducts)
  return (
    <div className={s.wrapper}>
      {products.map(({ id, img, title, company, price, amount }) => (
        <div key={id} className={s.product}>
          <Product
            id={id}
            img={img}
            title={title}
            company={company}
            price={price}
            amount={amount}
          />
        </div>
      ))}
    </div>
  );
};

export default GridVariant;