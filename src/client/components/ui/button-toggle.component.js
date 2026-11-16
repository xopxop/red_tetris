import * as style from './button-toggle.component.css';
import { createContext, useContext, useState } from 'react';

const ButtonToggleGroupContext = createContext(null);

function ButtonToggleGroup({ children, value: initValue=null, onChange=null }) {
  const [ value, setValue ] = useState(initValue); 
  const handleToggle = (optionValue) => {
    if (value === optionValue) return;

    setValue(optionValue);
    onChange?.(optionValue)
  }

  return (
    <ButtonToggleGroupContext.Provider value={{ value, onChange: handleToggle }}>
      <div className={style["container"]}>
        {children}
      </div>
    </ButtonToggleGroupContext.Provider>
  );
}

function ButtonToggle({ children, value }) {
  const { value: groupValue, onChange } = useContext(ButtonToggleGroupContext);
  const isSelected = groupValue === value;
  return (
    <button
      className={`${style["btn"]} ${isSelected ? style["selected"] : ""}`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
}

export { ButtonToggleGroup, ButtonToggle };
