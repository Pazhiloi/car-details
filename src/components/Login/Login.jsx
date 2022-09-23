import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";
import Button from "../Button/Button";

import s from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const em = 'a'
  const psw = 'a'
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === em && password === psw) {
      dispatch(login())
      navigate('/cart');
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor="email">Email</label>
      <input
        name="email"
        value={email}
        type="text"
        className={s.input}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите ваш Email"
      />
      <label className={s.label} htmlFor="password">Password</label>
      <input
        name="password"
        value={password}
        type="text"
        className={s.input}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите ваш Пароль"
      />
      <div className={s.button}>
      <Button text="LOG IN" color="white" bg="red" width="256px" />
      </div>
    </form>
  );
};

export default Login;
