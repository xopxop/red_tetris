function roomHandler(io, client, roomService) {
  const getRooms = (callback) => {
    console.log("getRooms fnc called");
    const rooms = roomService.getAllRooms();

    callback({ status: 'success', data: rooms })
  }

  const getRoom = (callback) => {
    console.log("getRoom fnc called");
    callback({ status: 'success' })
  }

  const createRoom = (callback) => {
    console.log("createRoom fnc called");
    callback({ status: 'success' });
  }

  client.on("rooms:read", getRooms);
  client.on("room:read", getRoom);
  client.on("room:create", createRoom);
}

export default roomHandler;
