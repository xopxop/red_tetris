import * as style from './main.component.css';
import CreateRoomCard from './components/create-room-card.component.js';
import RoomBrowserCard from './components/room-browser-card.component.js';

function Main({ onJoinRoom }) {
  return(
    <div className={style["container"]}>
      <div className={style["heading"]}>
        <div className={style["eyebrow"]}>
          <span>MULTIPLAYER HUB</span>
        </div>
        <h2>
          CHOOSE YOUR <em>ARENA.</em>
        </h2>
        <p>
          Join a live room, enter an invite code, or host your own battle.
        </p>
      </div>
      <div className={style["room-choice-grid"]}>
        <RoomBrowserCard />
        <CreateRoomCard
          onCreate={onJoinRoom}
        />
      </div>
    </div>
  );
}

export default Main;
