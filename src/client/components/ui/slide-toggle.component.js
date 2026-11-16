import { useState } from 'react';
import * as style from './slide-toggle.component.css';

function SlideToggle({ checked=false, onToggledChanged }) {
  const [ toggled, setToggled ] = useState(checked);
  const handleOnClicked = () => {
    const nextState = !toggled;
    setToggled(!toggled);
    onToggledChanged?.(nextState);
  }

  return (
    <button
      className={`${style["toggle-btn"]} ${toggled ? style["toggled"] : "" }`}
      onClick={handleOnClicked}
    >
      <div className={style["thumb"]}></div>
    </button>
  );
}

export { SlideToggle };
