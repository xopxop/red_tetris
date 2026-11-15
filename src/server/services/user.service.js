class UserService {
  constructor(userStore) {
    this.userStore = userStore;
  }

  getAllUsers() {
    return this.userStore.getAll();
  }

  createUser(username, socketId) {
    const user = { username, socketId };

    return this.userStore.save(user);
  }

  getUser(id) {
    return this.userStore.getById(id);
  }

  deleteUser(id) {
    return this.userStore.deleteById(id);
  }
}

export default UserService;

