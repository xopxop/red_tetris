import http from 'http'
import { Server } from 'socket.io';
import roomHandler from './handlers/room.handler.js'
import RoomStore from './stores/room.store.js';
import RoomService from './services/room.service.js';
import userHandler from './handlers/user.handler.js';
import UserStore from './stores/user.store.js';
import UserService from './services/user.service.js';

const port = 3000
// Create a local server to receive data from
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: `http://localhost:8080`
  }
})

const user = [];

const roomStore = new RoomStore();
const roomService = new RoomService(roomStore);
const userStore = new UserStore();
const userService = new UserService(userStore);

io.on('connection', (client) => {
  console.log('a user connected');

  function handleSetUsername(username) {
    user.push(username);
  }

  client.on('setUsername', handleSetUsername);

  userHandler(io, client, userService);
  roomHandler(io, client, roomService);

  client.on('disconnect', (_reason) => {
    console.log('a user disconnect')
  })

});

server.listen(port, () => {
  console.log(`Tetris server is listening on port ${port}`);
});
