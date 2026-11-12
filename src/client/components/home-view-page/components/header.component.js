import * as style from './header.component.css';
import Logo from '../../ui/logo.component.js';

function HeaderNav() {
  return (
    <nav className={style["site-nav"]} aria-label="Main navigation">
      <a href="https://github.com/xopxop/red_tetris" target="_blank" rel="noreferrer">
        GITHUB
      </a>
      <a href="#about">
        ABOUT
      </a>
    </nav>
  );
}

function ServerStatus() {
  return (
    <span className={style["status-pill"]}>
      <i className={style["online-dot"]} /> SERVERS ONLINE
    </span>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <HeaderNav />
      <ServerStatus />
    </header>
  );
}

export default Header;
