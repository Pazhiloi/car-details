import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { markList } from './data';
import AsyncPage from './pages/AsyncPage/AsyncPage';
import CartPage from './pages/CartPage/CartPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import MainPage from './pages/MainPage/MainPage';
import PaginationPage from './pages/PaginationPage/PaginationPage';
import ProductPage from './pages/ProductPage/ProductPage';
import UserPage from './pages/UserPage/UserPage';
import { filterByCheckbox, updateFilters} from './redux/actions/productsActions';

function App() {
  
  const filters = useSelector(state => state.products.filters)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const setFilter = (e) => {
    e.preventDefault();
    const { index } = e.currentTarget.dataset;
    const newFilters = [...filters];
    newFilters[index].status = !newFilters[index].status;
    dispatch(updateFilters(newFilters));
    dispatch(filterByCheckbox(products, newFilters));
  };
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/async" element={<AsyncPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="/catalog"
            element={<CatalogPage setFilter={setFilter} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
