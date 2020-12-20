const express = require("express");
// const http = require("http")
const mongoose = require("mongoose");
const routes = require("./routes");
// const app = express();
const PORT = process.env.PORT || 3001;

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const socketPort = 3002;

// const SocketIO = require("socket.io");

// const io = SocketIO(socketPort)

// const server = http.createServer(app)

// const io = SocketIO(server
//     // ,{
//     // cors: {
//     //     origin: "http://localhost:3000/",
//     //     methods: ["GET", "POST"]
//     // }
// // }
// )

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(app.urlencoded({ extended: true }));
// app.use(app.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/casrep");
mongoose.set('useFindAndModify', false);


// io.on('connection', socket => socket.emit('hello', { message: 'hello from server!' }));

io.on("connection", socket => {
    console.log("client connected on socket", socket.id)
    socket.on("update", () =>{
        io.sockets.emit("hello")
        // socket.emit("update", update)
    })
    // console.log(socket)
})
// server.listen(3000);

// Start the API server
server.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

// io.listen(socketPort);
// console.log("socket listening on port ", socketPort)
