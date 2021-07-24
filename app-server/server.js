const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const moment = require("moment");
const UsersDB = require("./utils/user");

const PORT = 3005;

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connection`);

  socket.on("initConnect", ({ username, room }) => {
    const user = UsersDB.userJoin(socket.id, username, room);
    socket.join(user.room);

    socket.emit("hello", {
      "username" : "Chat Boot",
      "content" : `${user.username} has joined the chat`,
      "time" : moment().format("h:mm a"),
    });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
