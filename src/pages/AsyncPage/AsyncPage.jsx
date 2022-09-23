import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../redux/actions/asyncActions';
import s from "./AsyncPage.module.css";
const AsyncPage = () => {
  const dispatch = useDispatch()
const posts = useSelector((state) => state.posts?.posts);
  useEffect(() => {
   dispatch(getPostsAsync()); 
  }, [])
  return (
    <div>
    {
      posts.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))
    }
    </div>
  );
};

export default AsyncPage;