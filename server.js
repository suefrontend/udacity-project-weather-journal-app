// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// TODO:
// Create a server running on the port of your choosing
// Add a console.log() to the server callback function, and
// test that your server is running using Node in the terminal to run the file server.js

// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// });

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// TODO:
// Add a GET route that returns the projectData object in your server code
app.get('/weather', (req, res) => {
	res.send(projectData);
});

// Then, add a POST route that adds incoming data to projectData.
// The POST route should anticipate receiving three pieces of data from the request body
//
//// temperature
//// date
//// user response
// Make sure your POST route is setup to add each of
// these values with a key to projectData.
app.post('/weather/add', (req, res) => {
	// Receive data from client side
	projectData = {
		date: req.body.date,
		temp: req.body.temp,
		content: req.body.content,
		description: req.body.description,
		city: req.body.city,
	};

	res.send(projectData);
});

// Setup Server
app.listen(3000, () => console.log('TEST'));

// 参考
// https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/
