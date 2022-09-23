import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cart, close, logo, user } from '../../data';
import { logout } from '../../redux/actions/userActions';
import Input from '../Input/Input';
import Nav from '../Nav/Nav';
import s from  "./Menu.module.css";
const Menu = () => {
  const amount = useSelector((state) => state.cart.amount);
   const dispatch = useDispatch()
   const logOut = () => {
    dispatch(logout())
   }
  return (
    <div className="container">
      <div className={s.inner}>
        <img src={logo} alt="" className={s.logo} />
        <Nav />
        <Input />
        <div className={s.navRight}>
          <Link to={"/cart"}>
            <div className={s.wrapper}>
              <img src={cart} alt="" className={s.image} />
              <div className={s.amountContainer}>
                <p className={s.amount}>{amount}</p>
              </div>
            </div>
          </Link>
          <Link to={"/user"}>
            <img src={user} alt="" className={s.image} />
          </Link>
          <div onClick={logOut} className={s.close}>
            <img src={close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;