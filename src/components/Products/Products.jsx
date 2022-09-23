import React from 'react';
import { useSelector } from 'react-redux';
import GridVariant from '../GridVariant/GridVariant';
import ListVariant from '../ListVariant/ListVariant';
import s from "./Products.module.css";
const Products = () => {

  const view = useSelector(state => state.products.view)
  return (
    <div>
      {view === 'grid' ? <GridVariant /> : <ListVariant />}
    </div>
  );
};

export default Products;