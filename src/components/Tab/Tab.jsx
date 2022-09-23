import React from 'react';
import s from "./Tab.module.css";
const Tab = ({title, toggleState, setToggleState, id}) => {
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '338px',
  height: '50px',
  fontSize: '18px',
  fontWeight: '500',
  color: '#867777',
  border: '1px solid #F4E5E2',
  cursor: 'pointer',
}
const activeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "338px",
  height: "50px",
  fontSize: "18px",
  fontWeight: "500",
  color: "#867777",
  border: "1px solid #E11C43",
  cursor: "pointer",
};
  return (
    <div
      style={id === toggleState ? activeStyle : style}
      onClick={() => setToggleState(id)}
    >
      {title}
    </div>
  );
};

export default Tab;