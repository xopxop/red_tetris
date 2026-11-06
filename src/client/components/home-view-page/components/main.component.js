import * as style from './main.component.css';
import { useState } from 'react';
import { useSocket } from '../../useSocket';

function UserSVGIcon() {
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
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20c.5-4 2.6-6 6.5-6s6 2 6.5 6" />
    </svg>
  )
}

function ArrowSVGIcon() {
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
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}


function Main({ onJoin }) {
  const { socket } = useSocket();
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    socket.emit('setUsername', name);
    onJoin(name);
  }

  return (
    <main>
      <div className={style["eyebrow"]}>
        <span>LIVE MULTIPLAYER</span>
      </div>
      <h1>
        DROP FAST.
        <br />
        <em>FIGHT BACK.</em>
      </h1>
      <p className={style["lead"]}>
        Classic blocks. Real opponents. Zero mercy.
        <br />
        Clear lines, send garbage, and own the grid.
      </p>
      <form
        className={style["join-card"]}
        onSubmit={(e) => submit(e)}
      >
        <label htmlFor="username">CHOOSE YOUR CALLSIGN</label>
        <div className={style["input-shell"]}>
          <UserSVGIcon name="user" />
          <input
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
            maxLength={16}
            autoFocus
          />
        </div>
        <button
          className={style["primary-button"]}
          type="submit"
        >
          ENTER THE ARENA <ArrowSVGIcon />
        </button>
        <small>No account needed. Just blocks.</small>
      </form>
      <div className={style["stats-strip"]}>
        <div>
          <strong>2,847</strong>
          <span>PLAYERS ONLINE</span>
        </div>
        <div>
          <strong>412</strong>
          <span>BATTLES LIVE</span>
        </div>
        <div>
          <strong>58M</strong>
          <span>LINES CLEARED</span>
        </div>
      </div>  
    </main>
  );
}

export default Main;
