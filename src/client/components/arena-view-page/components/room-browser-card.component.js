import * as style from './room-browser-card.component.css';
import { useState, useEffect } from 'react';
import { UserIcon, ArrowIcon } from '../../ui/icon.component.js';
import { useSocket } from '../../useSocket.js';

function RoomBrowserCard() {
  const [roomCode, setRoomCode] = useState("")
  const [ publicRooms, setPublicRooms ] = useState([]);
  
  const { socket } = useSocket();

  useEffect(() => {
    const handleRoomAdd = (newRoom) => setPublicRooms(prev => [...prev, newRoom]);
    socket.emit("rooms:read", (r) => {
      setPublicRooms(r.data);
    });

    socket.on("rooms:add", handleRoomAdd);

    return () => {
      socket.off("rooms:add", handleRoomAdd);
    };
  }, []);
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

  return (
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
  );
}

export default RoomBrowserCard;
