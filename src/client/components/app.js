import LobbyView from './lobby-view/lobby-view';
import BattleView from './battle-view/battle-view'
import { io } from 'socket.io-client'
import { useEffect, useState, useMemo } from 'react'

const Lobby = ({socket}) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket.on('return-room-list', (roomList) => {
      setRooms(roomList);
    })
    socket.emit('give-room-list');
  }, [socket]);

  return (
    <div>
      {rooms.length === 0 ? (
        <div>There are no available rooms. Create one!</div>
      ) : (
        <ul>
          {rooms.map((r) => (
            <li>{r.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const TestComponent = () => {
  const URL = "http://localhost:3000"
  const [connected, setConnected] = useState(false)
  const socket = useMemo(() => io(URL, { autoConnect: false }), []);

  useEffect(() => {
    function onConnect() {
      setConnected(true)
    }

    function onDisconnect() {
      setConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect)
    };
  }, [])

  return (
    <div>
      <div>Connection State: {String(connected)}</div>
      This is a test component
      <div>
        <button onClick={() => socket.connect() }>Connect</button>
        <button onClick={() => socket.disconnect() } >Disconnect</button>
      </div>
      {connected && (
        <Lobby socket={socket} />
      )}
    </div>
  );
}

const App = () => {
  return (
    <>
      <TestComponent />
    </>
  );
}

export default App;

