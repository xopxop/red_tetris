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

socket.on('connection', (socket) => {
  console.log('a user connected');

  const data = socket.handshake.query

  socket.on('disconnect', (reason) => {
    console.log('a user disconnect')
  })
});


server.listen(port, () => {
  console.log(`Tetris server is listening on port ${port}`);
});
