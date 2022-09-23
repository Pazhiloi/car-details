import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { changeView } from '../../redux/actions/productsActions';
import s from "./VariantCheckbox.module.css";
const VariantCheckbox = ({img, title}) => {

  const ref = useRef(null)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    const value = ref.current.title;
    dispatch(changeView(value));
  }
  return (
    <div ref={ref} title={title} onClick={handleClick}>
      <img src={img} alt="" />
    </div>
  );
};

export default VariantCheckbox;