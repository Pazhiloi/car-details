import React from 'react';
import { tabs } from '../../data';
import Tab from '../Tab/Tab';
import s from "./Tabs.module.css";
const Tabs = ({toggleState, setToggleState}) => {
  return (
    <div className={s.tabs}>
      {tabs.map(({ title, id }) => (
        <Tab
          toggleState={toggleState}
          setToggleState={setToggleState}
          key={id}
          title={title}
          id={id}
        />
      ))}
    </div>
  );
};

export default Tabs;