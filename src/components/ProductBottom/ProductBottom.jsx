import React, { useState } from 'react';
import Characteristics from '../Characteristics/Characteristics';
import Reviews from '../Reviews/Reviews';
import Sellers from '../Sellers/Sellers';
import Tabs from '../Tabs/Tabs';
import s from "./ProductBottom.module.css";
const ProductBottom = () => {
  const [toggleState, setToggleState] = useState(1);
  const content = (index) => {
    if (index === 2) {
      return <Reviews/>
    } else if (index === 3) {
      return <Characteristics />;
    }else{
      return <Sellers/>
    }
  }
  return (
    <div className={s.section}>
      <Tabs toggleState={toggleState} setToggleState={setToggleState} />
      {content(toggleState)}
    </div>
  );
};

export default ProductBottom;