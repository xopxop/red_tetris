class RoomService {
  constructor(roomStore) {
    this.roomStore = roomStore;
  }

  getAllRooms() {
    return this.roomStore.getAll();
  }

  createRoom() {
    const room = {
      code: "VOID-2F8B",
      name: "Test Room",
      players: 1,
      level: "CASUAL",
      ping: 42
    };

    return this.roomStore.save(room);
  }

  getRoom(id) {
    return this.roomStore.getById(id);
  }

  deleteRoom(id) {
    return this.roomStore.deleteById(id);
  }
}

export default RoomService;
