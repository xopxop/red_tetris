import { useState } from 'react';
import * as style from './username-setup-modal.css';

function UserNameSetupModal({ setUsername }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // will need to talk to sever to check if the nickname exists
    if (name.trim()) {
      setUsername(name);
    } 
  }

  return (
    <div className={style['player-setup-modal-container']}>
      <header>
        <h1>WELCOME TO  RED-TETRIS</h1>
        <p>Battle real-time opponents in classic arcade action</p>
      </header>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter an username to join:</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          placeholder="USERNAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </div>
  )
}

export default UserNameSetupModal;
