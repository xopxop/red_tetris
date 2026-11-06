function RoomLobby() {
  return (
    <div>
      <h2>Room: {roomName}</h2>
      <h3>Players</h3>
      <ul>
        {players.map((p) => (<li key={p.id}>{p.name} {p.isHost ? 'HOST' : ''}</li>))}
      </ul>
      {isHost ? (
        <button>Start Game</button>
      ) : (
        <p>Waiting for leader to start...</p>
      )}
    </div>
  );
}


