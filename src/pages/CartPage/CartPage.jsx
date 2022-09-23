import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { arrowDown, arrowUp } from '../../data';
import { clear, getTotals, remove, toggle } from '../../redux/actions/cartActions';
import s from "./CartPage.module.css";
const CartPage = () => {
  const cart = useSelector(state => state.cart.cart)
  const total = useSelector(state => state.cart.total)
  const dispatch = useDispatch()
  const navigate = useNavigate()
const user = useSelector((state) => state.user.user);
  
  useEffect(() => {
    if (!user) {
      navigate("/user");
    }
  }, [user])
  
  const clearCart = () => {
    dispatch(clear())
  }
  const removeItem = (id) => {
    dispatch(remove(id, cart))
  }
  const toggleAmount = (id, type) => {
    dispatch(toggle(id, type, cart))
  } 

  useEffect(() => {
    dispatch(getTotals(cart));
  }, [cart])
  
  return (
    <div className="container">
      <div className={s.title}>
        <h1 className="mainTitle">Your Cart</h1>
      </div>
      <div>
        {cart.map(({ id, img, title, price, amount }) => (
          <div key={id} className={s.wrapper}>
            <div className={s.left}>
              <img src={img} alt="" className={s.image} />
              <div className={s.info}>
                <div className={s.infoTitle}>{title}</div>
                <div className={s.price}>${price}</div>
                <button onClick={() => removeItem(id)} className={s.remove}>
                  remove
                </button>
              </div>
            </div>
            <div className={s.right}>
              <button
                onClick={() => toggleAmount(id, "inc")}
                className={s.buttonUp}
              >
                <img src={arrowUp} alt="" className={s.arrowUp} />
              </button>
              <div className={s.amount}>{amount}</div>
              <button
                onClick={() => toggleAmount(id, "dec")}
                className={s.buttonDown}
              >
                <img src={arrowDown} alt="" className={s.arrowDown} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr className={s.hr} />
      <div className={s.totalWrapper}>
        <div className={s.total}>Total</div>
        <div className={s.totalPrice}>${total}</div>
      </div>
      <div className={s.buttonWrapper}>
        <button onClick={clearCart} className={s.button}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;