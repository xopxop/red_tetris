import { useState } from 'react';
import * as style from './home-view.css';
import UserNameSetupModal from './username-setup-modal'

function HomeView() {
  const [ username, setUsername ] = useState('');

  return (
    <>
      <nav className={style['nav-bar']}>
        <div className={style['logo']}>Red Tetris</div>
        <ul className={style['list']}>
          <li className={style['list-item']}>Github</li>
          <li className={style['list-item']}>About</li>
        </ul>
      </nav>
      <main className={style['main-content']}>
        <UserNameSetupModal setUsername={setUsername} />
      </main>
      <footer className={style['footer']}>
        <p>// built by Du Than &nbsp;·&nbsp; 2026</p>
      </footer>
    </>
  );
}

export default HomeView;
