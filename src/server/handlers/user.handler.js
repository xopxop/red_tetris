function userHandler(io, client, userService) {

  const getUsers = (callback) => {
    console.log("getUsers fnc called");
    const users = userService.getAllUsers();

    callback({ status: 'success', data: users })
  }

  const getUser = (callback) => {
    console.log("getUser fnc called");
    callback({ status: 'success' })
  }

  const createUser = (username, callback) => {
    console.log("createUser fnc called");

    try {
      const newUser = userService.createUser(username, client.id);
      console.log(newUser);

      callback({ status: 'success', data: newUser });
      console.log("SUCCESS");
    } catch (e) {
      console.error(e);
      callback({ status: 'error', message: e.message });
    }
  }

  client.on("users:read", getUsers);
  client.on("user:read", getUser);
  client.on("user:create", createUser);
}

export default userHandler;

