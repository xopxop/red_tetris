import * as style from './logo.component.css';

function Logo() {
  return (
    <div className={style["logo"]} aria-label="Red Tetris">
      <div className={style["logo-mark"]}>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={style["text-mark"]}>
        <span>RED </span><span>TETRIS</span>
      </div>
    </div>
  )
}

export default Logo;
