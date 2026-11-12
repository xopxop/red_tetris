import * as style from './header.component.css';
import { LogoutIcon } from '../ui/icon.component.js'

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

function Profile() {
  const username = "duthan";
  const onLeave = () => {
  };

  return (
    <div className={style["profile"]}>
      <span className={style["online-dot"]} />
      <strong>{username}</strong>
      <span>RATING 1,240</span>
      <button onClick={onLeave} aria-label="Log out">
        <LogoutIcon />
      </button>
    </div>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <Profile />
    </header>
  );
}

export default Header;
