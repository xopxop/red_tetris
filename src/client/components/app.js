import LobbyView from './lobby-view/lobby-view';
import BattleView from './battle-view/battle-view'
import { useEffect, useState } from 'react'
import { SocketProvider, useSocket } from './useSocket'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

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

const TestLobby = () => {
  return (
    <div>Test Lobby</div>
  )
}

const TestComponent = () => {
  const { socket, connected } = useSocket();
  return (
    <div>
      <nav>
        <Link to="/room/playername">Join Room</Link>
      </nav>
      <Routes>
        <Route path="/room/playername" element={<TestLobby />} />
      </Routes>
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
    <BrowserRouter>
      <SocketProvider>
        <TestComponent />
      </SocketProvider>
    </BrowserRouter>
  );
}

export default App;

