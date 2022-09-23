import React from 'react';
import ProductBottom from '../../components/ProductBottom/ProductBottom';
import ProductTop from '../../components/ProductTop/ProductTop';
import s from "./Product.module.css";
const ProductPage = () => {
  return (
    <div className='container'>
      <ProductTop/>
      <ProductBottom/>
    </div>
  );
};

export default ProductPage;