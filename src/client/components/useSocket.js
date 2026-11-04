import { io } from 'socket.io-client'
import { useEffect, useState, useCallback, useMemo, createContext, useContext } from 'react'

const SocketContext = createContext(null);

const SocketProvider = ({children}) => {
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
    <SocketContext.Provider value={{ socket, connected }}>
      {children}
    </SocketContext.Provider>
  );
}

const useSocket = () => {
  const context = useContext(SocketContext);
  return context;
}

const useGameManament = () => {
  const { socket, connected } = useSocket();

  const createRoom = useCallback(() => {
    socket.emit('create-room');
  }, [socket]);

  const joinRoom = useCallback(() => {
    socket.emit('join-room');
  }, [socket]);

  const exitRoom = useCallback(() => {
    socket.emit('exit-room');
  }, [socket]);

  const getRoomList = useCallback(() => {
    socket.emit('get-room-list')
  }, [socket]);

  return {
    createRoom,
    joinRoom,
    getRoomList,
  };
}

export { SocketProvider, useSocket };
