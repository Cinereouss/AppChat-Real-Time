/**
 * This module be used like temporate database
 */

const users = [];

const userJoin = (id, username, room) => {
  const user = {
    id,
    username,
    room
  };
  
  users.push(user);

  return user;
}

const getUserById = (id) => {
  return users.find(user => user.id === id);
}

const userLeave = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getRoomUsers = (room) => {
  return users.filter((user) => user.room === room);
}

const coutUserOnline = () => {
  return users.length;
} 

module.exports = {
  userJoin,
  getUserById,
  userLeave,
  getRoomUsers,
  coutUserOnline,
};
