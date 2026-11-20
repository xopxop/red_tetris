import HomeViewPage from './home-view-page/home-view-page.component.js';
import ArenaViewPage from './arena-view-page/arena-view-page.component.js';
import BattleView from './battle-view/battle-view'
import { useEffect, useState } from 'react'
import { useSocket } from './useSocket'
import { Link, Routes, Route } from 'react-router-dom'

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


// ViewPage: "home", "arena", "lobby", "battle"
const App = () => {
  const { socket } = useSocket();
  const [ username, setUsername ] = useState(null);
  const [ room, setRoom ] = useState(null);
  const [ viewPage, setViewPage ] = useState("home")

  useEffect(() => {
    socket.connect();
  }, [])

  switch (viewPage) {
    case "battle":
      return (
        <div>Battle View Page</div>
      );
    case "lobby":
      return (
        <div>Lobby View Page</div>
      );
    case "arena":
      return (
        <ArenaViewPage
          username={username}
          onJoinRoom={(room) => {
            setRoom(room);
            setViewPage("lobby");
          }}
        />
      );
    case "home":
      return (
        <HomeViewPage
          onUserCreate={(name) => {
            setUsername(name);
            setViewPage("arena");
          }}
        />
      )
  }



  if (username && room) {
    return (<div>Lobby view</div>)
  }
  if (username && !room) {
    return (<ArenaViewPage username={username} onJoinRoom={(room) => setRoom(room)}/>)
  } else {
    return (
        (<HomeViewPage onUserCreate={(name) => setUsername(name)} />)
    )
  }
}

export default App;

