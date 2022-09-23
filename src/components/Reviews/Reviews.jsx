import React from 'react';
import s from "./Reviews.module.css";
const Reviews = () => {
  return (
    <div className={s.container}>
      <button className={s.button}>Войдите, чтобы оставить отзыв</button>
    </div>
  );
};

export default Reviews;