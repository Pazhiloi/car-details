import React from 'react';
import Button from '../Button/Button';
import s from "./Seller.module.css";
const Seller = ({
  id,
  name,
  rating,
  reviews,
  city,
  data,
  amount,
  state,
  price,
  isService,
}) => {
  return (
    <div className={s.item}>
      <div className={s.left}>
        <div className={s.wrapper}>
          <div className={s.name}>{name}</div>
          <div className={s.rating}>{rating}</div>
          <div className={s.reviews}>{reviews} отзывов</div>
        </div>
        <div className={s.info}>
          <div className={s.infoWrapper}>
            <div className={s.type}>Доставка из:</div>
            <div className={s.city}>{city}</div>
          </div>
          <div className={s.infoWrapper}>
            <div className={s.type}>Срок доставки:</div>
            <div className={s.city}>{data}</div>
          </div>
          <div className={s.infoWrapper}>
            <div className={s.type}>В наличии:</div>
            <div className={s.city}>{amount}шт.</div>
          </div>
          <div className={s.infoWrapper}>
            <div className={s.type}>Состояние:</div>
            <div className={s.city}>{state}</div>
          </div>
        </div>
      </div>

      <div className={s.price}>{price} T</div>
      <div className={s.buttons}>
        {isService ? (
          <>
            <div className={s.service}>
              <Button
                text="СЕРВИС"
                color="#333"
                bg="white"
                width="150px"
                border
              />
            </div>
            <Button text="ВЫБРАТЬ" color="white" bg="red" width="150px" />
          </>
        ) : (
          <div className={s.button}>
            <Button text="ВЫБРАТЬ" color="white" bg="red" width="150px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Seller;