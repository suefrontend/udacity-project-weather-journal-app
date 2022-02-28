// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express();

// Initialize the main project folder
app.use(express.static('website'));

// TODO:
// Create a server running on the port of your choosing
// Add a console.log() to the server callback function, and
// test that your server is running using Node in the terminal to run the file server.js

app.get('/', function (req, res) {
	res.send('Hello World!');
});

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// TODO:
// Add a GET route that returns the projectData object in your server code
app.get('/projectData', function (req, res) {
	res.json(projectData);
});

// Then, add a POST route that adds incoming data to projectData.
// The POST route should anticipate receiving three pieces of data from the request body
//
//// temperature
//// date
//// user response
// Make sure your POST route is setup to add each of
// these values with a key to projectData.
app.post('/add', (req, res) => {
	const allData = req.body;
	const weatherDatatemperature = allData.temperature;

	const projectDataItem = {
		temperature: todoTitle,
		date: new Date(),
		userResponse: userResponse,
	};

	projectData.push(projectDataItem);

	res.json(projectDataItem);
});

app.get('/all', function (req, res) {
	const testData = {
		temp: 23.567,
		feel: 'Hot',
		date: new Date(),
	};

	res.json(testData);
});

// Setup Server
app.listen(3000, () => console.log('TEST'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// 参考
// https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/
