const app = require("express")();
const httpServer = require("http").createServer(app);
const socketIO = require("socket.io")(httpServer);

const PORT = 3001;

socketIO.on("connection", socket => {
  console.log('New connection ', socket.id);
})

httpServer.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
