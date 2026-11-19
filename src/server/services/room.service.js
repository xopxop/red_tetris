import { generateUUID, generateShortId } from '../helpers/id.js';

// *** Main Room DTO
// id: GUID
// code: room code (public room doesnt have room code)
// name: User name input (will do)
// players: number of players

class RoomService {
  constructor(roomStore) {
    this.roomStore = roomStore;
  }

  getAllRooms() {
    return this.roomStore.getAll();
  }

  createRoom(data) {
    console.log(data);
    const id = generateUUID();
    const code = !data.privateRoom ? generateShortId(6) : null;
    const dto = { id, code, name: "Test Room", players: data.players, level: "TEST", ping: 42 };

    this.roomStore.save(dto);
    return dto;
  }

  getRoom(id) {
    return this.roomStore.getById(id);
  }

  deleteRoom(id) {
    return this.roomStore.deleteById(id);
  }
}

export default RoomService;
