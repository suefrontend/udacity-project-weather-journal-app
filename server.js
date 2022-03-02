const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

let projectData = {};

// Send projectData to client side
app.get('/weather', (req, res) => {
	res.send(projectData);
});

// Receive data from client side
app.post('/weather/add', (req, res) => {
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
app.listen(3000, () => console.log('Listening to 3000'));
