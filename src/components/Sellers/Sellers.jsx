import React from 'react';
import { sellers } from '../../data';
import Seller from '../Seller/Seller';
import s from "./Sellers.module.css";
const Sellers = () => {
  return (
    <div className={s.sellers}>
      {sellers.map(
        ({
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
        }) => (
          <Seller
            key={id}
            id={id}
            name={name}
            rating={rating}
            reviews={reviews}
            city={city}
            data={data}
            amount={amount}
            state={state}
            price={price}
            isService={isService}
          />
        )
      )}
    </div>
  );
};

export default Sellers;