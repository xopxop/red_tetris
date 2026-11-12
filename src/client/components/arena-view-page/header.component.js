import * as style from './header.component.css';

function LogoutSVGIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-3" />
      <path d="M10 12h11m-4-4 4 4-4 4" />
    </svg>
  )
}

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
        <LogoutSVGIcon />
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
