import * as style from './button.component.css';
import { useState } from 'react';

function Button({ className, variant="primary", children, onClick }) {
  return (
    <button
      className={`${style["btn"]} ${style[variant]} ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}


export { Button };
