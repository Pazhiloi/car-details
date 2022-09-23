import React, {useState} from 'react';
import { slider } from '../../data';
import Slide from '../Slide/Slide';
import s from "./ThumbSlider.module.css";
const ThumbSlider = () => {
  const [image, setImage] = useState(slider[0].img)
  const [idx, setIdx] = useState(0);
  return (
    <>
      <div className={s.top}>
        <img className={s.mainImage} src={image} alt="" />
      </div>
      <div className={s.bottom}>
        {slider.map(({ img, id }) => (
          <div key={id} className={s.wrapper}>
            <Slide
              idx={idx}
              img={img}
              id={id}
              setImage={setImage}
              setIdx={setIdx}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ThumbSlider;