import { useState } from 'react';
import './view.css';

const HomeView = () => {
  const [playerName, setPlayerName] = useState('');

  return (
    <div className="home-view-container">
      <header>
        <h1 className="logo">RED<span className="highlight">TETRIS</span></h1>
        <p className="tagline">Battle real-time opponents in classic arcade action</p>
      </header>
      <section className="lobby-card">
        <div className="input-group">
          <label>Player Name</label>
          <input
            id="playerName"
            type="text"
            placeholder="eg. MasterBlock67"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Rome Name</label>
          <input
            id="roomName"
            type="text"
            placeholder="eg. red-arena"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </div>
        <div className="action-buttons">
          <button>Create Room</button>
          <button>Join Room</button>
        </div>
      </section>
    </div>
  );
}

const BattleView = () => {
  return (
    <div className="battle-view-container">
      
    </div>
  );
}

export { HomeView, BattleView };
