import LobbyView from './lobby-view/lobby-view';
import BattleView from './battle-view/battle-view'
import { io } from 'socket.io-client'
import { useEffect, useState, useMemo } from 'react'

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
      <button onClick={() => socket.connect() }>Connect</button>
      <button onClick={() => socket.disconnect() } >Disconnect</button>
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

