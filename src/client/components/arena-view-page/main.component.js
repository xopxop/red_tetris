import * as style from './main.component.css';
import { useState, useEffect } from 'react';
import { UserIcon, ArrowIcon } from '../ui/icon.component.js';
import { useSocket } from '../useSocket.js';
import { Button } from '../ui/button.component.js';
import { SlideToggle } from '../ui/slide-toggle.component.js';

function CreateRoomCard() {

}

function Main() {
  const [roomCode, setRoomCode] = useState("")
  const [maxPlayers, setMaxPlayers] = useState(4)
  const [privateRoom, setPrivateRoom] = useState(false)
  const [ publicRooms, setPublicRooms ] = useState([]);

  const onLeave = () => {
  }

  const joinRoom = (e) => {
    e.preventDefault()
    /*
    if (roomCode.trim())
      onChoose({
        code: roomCode.trim().toUpperCase(),
        isHost: false,
        maxPlayers: 4,
        privateRoom: true,
      })
    */
  }

  
  const { socket } = useSocket();

  useEffect(() => {
    socket.emit("rooms:read", (r) => {
      setPublicRooms(r.data);
    })
  }, []);

  return(
    <section className={style["rooms-content"]}>
      <div className={style["rooms-heading"]}>
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
        <section className={`${style["room-browser"]} ${style["panel"]}}`} >
          <div className={style["room-browser-head"]}>
            <div>
              <span>OPEN LOBBIES</span>
              <small>LIVE NOW</small>
            </div>
            <i>
              <span />3 ROOMS FOUND
            </i>
          </div>
          <div className={style["room-list"]}>
            {publicRooms.map((room) => (
              <button
                className={style["room-row"]}
                key={room.code}
                onClick={() =>
                  onChoose({
                    code: room.code,
                    isHost: false,
                    maxPlayers: 6,
                    privateRoom: false,
                  })
                }
              >
                <span className={style["room-signal"]}>
                  <i />
                  <i />
                  <i />
                </span>
                <span className={style["room-detail"]}>
                  <strong>{room.name}</strong>
                  <small>{room.code}</small>
                </span>
                <span
                  className={`${style["mode-label"]} ${
                    () => room.level === "RANK" ? `${style["ranked"]}` : ""
                  }`}
                >
                  {room.level}
                </span>
                <span className={style["room-count"]}>
                  <UserIcon size={14} />
                  {room.players} / 6
                </span>
                <span className={style["room-ping"]}>{room.ping} MS</span>
                <ArrowIcon size={16} />
              </button>
            ))}
          </div>
          <form className={style["code-entry"]} onSubmit={joinRoom}>
            <label htmlFor="room-code">HAVE AN INVITE CODE?</label>
            <div>
              <input
                id="room-code"
                value={roomCode}
                onChange={(event) => setRoomCode(event.target.value)}
                placeholder="ENTER ROOM CODE"
                maxLength={16}
              />
              <button type="submit" disabled={!roomCode.trim()}>
                JOIN ROOM <ArrowIcon size={16} />
              </button>
            </div>
          </form>
        </section>

        <section className={style["create-room-card"]}>
          <div className={style["create-icon"]}>
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className={style["create-kicker"]}>YOUR RULES. YOUR BATTLE.</span>
          <h3>CREATE A ROOM</h3>
          <p>
            Host a private match and invite your crew, or open the doors to
            everyone.
          </p>
          <div className={style["create-setting"]}>
            <span>MAX PLAYERS</span>
            <div>
              {[2, 4, 6].map((count) => (
                <button
                  className={maxPlayers === count ? style["selected"] : ""}
                  key={count}
                  onClick={() => setMaxPlayers(count)}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
          <div className={style["privacy-toggle"]}>
            <span>
              <strong>{privateRoom ? "PRIVATE ROOM" : "PUBLIC ROOM"}</strong>
              <small>
                {privateRoom
                  ? "Invite code required"
                  : "Visible to all players"}
              </small>
            </span>
            <SlideToggle onToggledChanged={(value) => setPrivateRoom(value)}/>
          </div>



          <Button
            className={style["create-button"]}
            onClick={() =>
              onChoose({
                code: "RED-9X7K",
                isHost: true,
                maxPlayers,
                privateRoom,
              })
            } 
          >
            CREATE LOBBY <ArrowIcon />
          </Button>      

        </section>
      </div>
      <button className={style["back-link"]} onClick={onLeave}>
        ← CHANGE CALLSIGN
      </button>
    </section>
  );
}

export default Main;
