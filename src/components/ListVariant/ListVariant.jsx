import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addTo } from '../../data';
import s from "./ListVariant.module.css";
const ListVariant = () => {
  const products = useSelector(state => state.products.filteredProducts)
  return (
    <div className={s.wrapper}>
      {products.map(({ id, img, title, company, price }) => (
        <Link to={`/product/${id}`} key={id} className={s.product}>
          <div className={s.inner}>
            <img className={s.img} src={img} alt={title} />
            <div className={s.top}>
              <div className={s.title}>{title}</div>
              <div className={s.price}>{price} P.</div>
            </div>
          </div>

          <div className={s.bottom}>
            <img src={addTo} alt="cart" className={s.cart} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListVariant;