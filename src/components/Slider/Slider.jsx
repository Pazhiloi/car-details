import React, { useState } from "react";
import { sliderList } from '../../data';
import s from "./Slider.css";
const Slider = () => {
const [items, setItems] = useState(sliderList);
const [active, setActive] = useState(0)
const [direction, setDirection] = useState('')
console.log(items.length);
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const Item = (props) => {
  const [level, setLevel] = useState(props.level);
  const className = 'item level' + props.level
  return <div className={className}>
    {props.id}
  </div>;
}

const generateItems = () => {
  let items = [];
  let level;
  console.log(active);
  for (let i = active - 2; i < active + 3; i++) {
    let index = i;
    if (i < 0) {
      index = items.length + i;
    } else if (i >= items.length) {
      index = i % items.length;
    }
    level = active - i;
    items.push(<Item key={index} id={items[index]} level={level}  />);
  }
  return items;
}


const moveLeft =() =>  {
        let newActive = [...active]
        setDirection('left')
        newActive--
        setActive(newActive < 0 ? items.length - 1 : newActive);
    }
    
 const moveRight =() =>  {
        let newActive = [...active]
        setDirection('right')
        setActive((newActive + 1) % items.length);
    }
  return (
    <div className='slider__container'>
      <div onClick={moveLeft} className="arrow arrow-left">
        i
      </div>
      <ReactCSSTransitionGroup transitionName={direction}>
        {generateItems()}
      </ReactCSSTransitionGroup>
      <div onClick={moveRight} className="arrow arrow-right">
        i
      </div>
    </div>
  );
};

export default Slider;