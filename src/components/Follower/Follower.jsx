import React from 'react';
import s from "./Follower.module.css";
const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <article className={s.card}>
      <img src={avatar_url} alt={login} className={s.img} />
      <h4 className={s.title}>{login}</h4>
      <a href={html_url} className={s.btn}>
        view profile
      </a>
    </article>
  );
};

export default Follower;