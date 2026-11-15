import * as style from './header.component.css';
import { LogoutIcon } from '../ui/icon.component.js'
import Logo from '../ui/logo.component.js';

function Profile({ username }) {
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

function Header({ username }) {
  return (
    <header>
      <Logo />
      <Profile username={username} />
    </header>
  );
}

export default Header;
