import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import ThumbSlider from '../ThumbSlider/ThumbSlider';
import s from "./ProductTop.module.css";
const ProductTop = () => {
const { id } = useParams();
const products = useSelector(state => state.products.products)
const { title, price } = products[id];
console.log(products[id]?.title);
  return (
    <div className={s.product}>
      <div className={s.productLeft}><ThumbSlider/> </div>

      <div className={s.productRight}>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.data}>
          <div className={s.rating}></div>
          <div className={s.number}>5.0</div>
          <div className={s.reviews}>130 отзывов</div>
          <div className={s.orders}>288 заказов</div>
        </div>
        <div className={s.priceWrapper}>
          <div className={s.priceTitle}>Цена</div>
          <div className={s.price}>{price} ₸</div>
        </div>
        <div className={s.buttons}>
          <Button
            text="ВЫБРАТЬ ПРОДАВЦА"
            color="white"
            bg="red"
            width="256px"
          />
          <Button
            text="ЗАПИСАТЬСЯ НА СЕРВИС"
            color="#333"
            bg="white"
            width="256px"
            border
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTop;