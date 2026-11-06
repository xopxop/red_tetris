import http from 'http'
import { Server } from 'socket.io';

const port = 3000
// Create a local server to receive data from
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: `http://localhost:8080`
  }
})

const user = [];

io.on('connection', (client) => {
  console.log('a user connected');

  function handleSetUsername(username) {
    user.push(username);
  }

  client.on('setUsername', handleSetUsername);

  client.on('disconnect', (_reason) => {
    console.log('a user disconnect')
  })

});

server.listen(port, () => {
  console.log(`Tetris server is listening on port ${port}`);
});
