import React from 'react';
import s from "./Characteristics.module.css";
const Characteristics = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.description}>
        Масло SGAZPROMNEFT Super 10W-40 для самых современных малотоксичных
        двигателей, соответствующих требованиям Евро 5, 4, 3, 2, и US 2002 по
        выбросам.
      </p>
      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Производитель</div>
        <div className={s.descriptionName}>ABOBA</div>
      </div>
      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Наименование</div>
        <div className={s.descriptionName}>Моторное масло</div>
      </div>
      <div className={s.title}>Общие характеристики</div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Ширина (мм)</div>
        <div className={s.descriptionName}>193.1 мм</div>
      </div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Толщина (мм)</div>
        <div className={s.descriptionName}> 19.1 мм</div>
      </div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Сторона установки</div>
        <div className={s.descriptionName}> передний мост</div>
      </div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>
          Дополнительный артикул / Доп. информация 2
        </div>
        <div className={s.descriptionName}> с прижимной пластиной</div>
      </div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}>Высота (мм) 64.1 мм</div>
        <div className={s.descriptionName}> 64.1 мм</div>
      </div>

      <div className={s.descriptionWrapper}>
        <div className={s.descriptionTitle}> Датчик износа</div>
        <div className={s.descriptionName}>
          подготовлено для датчика износа колодок
        </div>
      </div>
    </div>
  );
};

export default Characteristics;