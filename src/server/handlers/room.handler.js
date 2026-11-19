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

  const createRoom = (data, callback) => {
    console.log("createRoom fnc called");
    try {
      const room = roomService.createRoom(data);
      callback({ status: 'success', data: room });
      client.broadcast.emit("rooms:add", room);
    } catch (e) {
      console.error(e);
      callback({ status: 'error', message: e.message });
    }
  }

  client.on("rooms:read", getRooms);
  client.on("room:read", getRoom);
  client.on("room:create", createRoom);
}

export default roomHandler;
