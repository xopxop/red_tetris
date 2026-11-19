// Room DTO
// roomId: GUID
// code: room code (public room doesnt have room code)
// name: User name input (will do)
// players: number of players

class RoomStore {
  constructor() {
    this.roomsMap = new Map([
      [
        'id-01',
        {
          code: "VOID-2F8A",
          name: "Neon Dropzone",
          players: 3,
          level: "CASUAL",
          ping: 24
        }
      ],
      [
        'id-02',
        {
          code: "BLOCK-7Q2M",
          name: "Stack District",
          players: 2,
          level: "RANKED",
          ping: 41
        }
      ],
      [
        'id-03',
        {
          code: "TETRA-4K9X",
          name: "Midnight Circuit",
          players: 5,
          level: "CASUAL",
          ping: 58
        }
      ]
    ])
  }

  getAll() {
    console.log("RoomStore::GetAll")
    return Array.from(this.roomsMap.values());
  }

  getById(id) {
    return this.roomsMap.get(id) || null;
  }

  save(dto) {
    this.roomsMap.set(dto.id, dto);
    console.log("RoomStore:save");
  }

  deleteById(id) {
    return this.roomsMap.delete(id);
  }
}

export default RoomStore;
