import * as style from './create-room-card.component.css';
import { useSocket } from '../../useSocket.js';
import { useState } from 'react';
import { Button } from '../../ui/button.component.js';
import { SlideToggle } from '../../ui/slide-toggle.component.js';
import { ButtonToggleGroup, ButtonToggle } from '../../ui/button-toggle.component.js';
import { ArrowIcon } from '../../ui/icon.component.js';

function CreateRoomCard({ onCreate }) {
  const { socket } = useSocket();
  const [maxPlayers, setMaxPlayers] = useState(4)
  const [privateRoom, setPrivateRoom] = useState(false)

  const handleCreateLobby = () => {
    socket.emit("room:create", { players: maxPlayers, privateRoom }, (res) => {
      if (res.status === 'success') {
        console.log(res);
        // onCreate(res.data);
      } else {
        console.err("Failed to create lobby:", res.message);
      }
    });
  }

  return (
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
        <ButtonToggleGroup value={4} onChange={(value) => setMaxPlayers(value)}>
          {[2, 4, 6].map((count) => (
            <ButtonToggle value={count} key={count}>
              {count}
            </ButtonToggle>
          ))}
        </ButtonToggleGroup>
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
        <SlideToggle onToggleChanged={(value) => setPrivateRoom(value)}/>
      </div>
      <Button
        className={style["create-button"]}
        onClick={() => handleCreateLobby()} 
      >
        CREATE LOBBY <ArrowIcon />
      </Button>      
    </section>
  );
}

export default CreateRoomCard;
