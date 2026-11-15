class UserStore {
  constructor() {
    this.usersMap = new Map();
  }

  getAll() {
    return Array.from(this.usersMap.values());
  }

  getById(id) {
    return this.usersMap.get(id) || null;
  }

  save(userDetail) {
    this.usersMap.set(userDetail.socketId, userDetail)
    return userDetail.socketId;
  }

  deleteById(id) {
    return this.usersMap.delete(id);
  }
}

export default UserStore;
