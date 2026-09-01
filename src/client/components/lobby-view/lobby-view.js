import * as style from './lobby-view.css';

const data = [
  { roomName: 'room-1', playerCount: 1 },
  { roomName: 'room-2', playerCount: 1 },
  { roomName: 'room-3', playerCount: 1 },
  { roomName: 'room-4', playerCount: 1 },
  { roomName: 'room-5', playerCount: 1 },
  { roomName: 'room-6', playerCount: 1 },
  { roomName: 'room-7', playerCount: 1 },
  { roomName: 'room-8', playerCount: 1 },
  { roomName: 'room-9', playerCount: 1 },
  { roomName: 'room-10', playerCount: 1 },
  { roomName: 'room-11', playerCount: 1 },
  { roomName: 'room-12', playerCount: 1 },
  { roomName: 'room-13', playerCount: 1 },
  { roomName: 'room-14', playerCount: 1 },
  { roomName: 'room-15', playerCount: 1 },
  { roomName: 'room-16', playerCount: 1 },
  { roomName: 'room-17', playerCount: 1 },
  { roomName: 'room-18', playerCount: 1 },
  { roomName: 'room-19', playerCount: 1 },
  { roomName: 'room-20', playerCount: 1 },
  { roomName: 'room-21', playerCount: 1 },
  { roomName: 'room-22', playerCount: 1 },
  { roomName: 'room-23', playerCount: 1 },
  { roomName: 'room-24', playerCount: 1 },
  { roomName: 'room-25', playerCount: 1 },
  { roomName: 'room-26', playerCount: 1 },
  { roomName: 'room-27', playerCount: 1 },
  { roomName: 'room-28', playerCount: 1 },
  { roomName: 'room-29', playerCount: 1 },
  { roomName: 'room-30', playerCount: 1 },
  { roomName: 'room-31', playerCount: 1 },
]

function LobbyView() {

  return (
    <>
      <nav className={style['nav-lobby-view']}>
        <div>Lobby List</div>
        <div>Username</div>
      </nav>
      <main className={style['content']}>
        <div className={style['lobby-list']}>
        {/*
          {data.map((row) => (
            <span className={style['lobby-item']}> 
              <span class="lobby-info">
                <span>{row.roomName}</span>
                <span>{row.playerCount}</span>
              </span>
              <button>Join</button>
            </span>
          ))}
        */}

          <table>
            <thead>
              <tr>
                <th>Room</th>
                <th>Players</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.name}>
                  <th>{row.roomName}</th>
                  <th>{row.playerCount}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          Action Buttons
        </div>
      </main>
    </>
  );
}

export default LobbyView;
