import http from 'http'
import { Server } from 'socket.io';

// Create a local server to receive data from
const server = http.createServer();
const socket = new Server(server, {
  cors: {
    origin: "http://localhost:8080"
  }
})

const port = 3000


// Listen to the request event
/*
server.on('request', (_request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});
*/

const rooms = [
  { name: "room one"},
  { name: "room two"},
  { name: "room three"},
  { name: "room four"},
  { name: "room five"},
  { name: "room six"},
  { name: "room seven"},
  { name: "room eight"},
  { name: "room nine"},
  { name: "room ten"},
  { name: "room eleven"},
]

socket.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('give-room-list', () => {
    socket.emit('return-room-list', rooms)
  })

  socket.on('disconnect', (reason) => {
    console.log('a user disconnect')
  })
});

server.listen(port, () => {
  console.log(`Tetris server is listening on port ${port}`);
});
