const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const socketio = require('socket.io')

const { getBoard, setBoard, move } = require('./Utils/chess')











const io = socketio(httpServer, {
    cors: {
      origin: ["http://localhost:3000", "http://192.168.0.109:3000"],
    },
  });


//Use bodyparser
app.use(bodyParser.json());

//Use cors
var cors = require('cors');
//allow all origins CHANGE FOR PROD
app.use(cors());

app.use(express.json());
app.use(morgan('tiny'))

//Cors stuff
app.use((req, res, next) => {
	//TODO
	//special domain relevant origin control 
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});


//Connect to Mongodb
mongoose.connect('mongodb://localhost:27017/ChessOnline', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
	console.log('Connected to DB');
});

//Connect to websocket
io.on('connection', socket => {
	console.log('new User')
	io.emit('connection', 'welcome to chess') 

	socket.on('disconnect', () => {
		console.log('user left')
	})

	socket.on('move', board => {
		setBoard(board)
		io.emit('newMove', getBoard())
	
	})



});


//Init API
//const apiRouter = require('./Routes/api.js');
//app.use('/api', apiRouter);



httpServer.listen(5000);



