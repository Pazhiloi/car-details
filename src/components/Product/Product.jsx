import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addTo } from '../../data';
import { addToCart, getTotals } from '../../redux/actions/cartActions';
import s from "./Product.module.css";
const Product = ({ id, img, title, company, price, amount }) => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const product = {
    id,
    img,
    title,
    company,
    price,
    amount,
  };
  const add = (id) => {
    dispatch(addToCart(id, cart, product));
  };
   useEffect(() => {
     dispatch(getTotals(cart));
   }, [cart]);
  return (
    <div>

    <Link to={`/product/${id}`}>
      <img className={s.img} src={img} alt={title} />
      <div className={s.title}>{title}</div>
      <div className={s.company}>{company}</div>
    </Link>
      <div className={s.bottom}>
        <div className={s.price}>{price} P.</div>
        <img onClick={!user ? () => navigate("/user") : () =>add(id)} src={addTo} alt="cart" className={s.cart} />
      </div>
    </div>
  );
};

export default Product;