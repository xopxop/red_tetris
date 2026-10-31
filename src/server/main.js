import http from 'http'
import { Server } from 'socket.io';

// Create a local server to receive data from
const server = http.createServer();
const io = new Server(server)

// Listen to the request event
server.on('request', (_request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('ping', (data) => {
    console.log(`Received ping from ${socket.id}:`, data);

    // Send 'pong' back to the client
    socket.emit('pong', { message: 'pong', timestamp: Date.now() });
  });
});


server.listen(8000);
