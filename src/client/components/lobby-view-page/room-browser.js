function CreateNewRoomForm({ onComplete }) => {
  const [roomName, setRoomName] = useState('');

  const handleSubmit = () => {
    if (roomName.trim()) {
      onComplete(roomName)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Room</h3>
      <br /><br />
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        required
      />
      <br /><br />
      <button type="submit">Create</button>
    </form>
  );
}

function RoomBrowser({ playerName, availableRoomsi, onCreateRoom, onJoinRoom }) {
  return (
    <>
      <h2>Hello, {playerName}!</h2>
      <div>
        <h3>Available Rooms:</h3>
        {availableRooms.length === 0 ? (
          <p>No active rooms yet. Create a new one!</p>
        ) : (
          <ul>
            {availableRooms.map((room) => (
              <li key={room.name}>
                <strong>{room.name}</strong> ({room.count} players)
                <button onClick={() => onJoinRoom(room.name)}>Join</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button>Create a new room!</button>
    </>
  );
}


