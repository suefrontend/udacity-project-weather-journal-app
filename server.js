// Require Express to run server and routes

// Start up an instance of app

// Initialize the main project folder

// TODO:
// Create a server running on the port of your choosing
// Add a console.log() to the server callback function, and
// test that your server is running using Node in the terminal to run the file server.js

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// TODO:
// Add a GET route that returns the projectData object in your server code

// Then, add a POST route that adds incoming data to projectData.
// The POST route should anticipate receiving three pieces of data from the request body
//
//// temperature
//// date
//// user response
// Make sure your POST route is setup to add each of
// these values with a key to projectData.

// Setup Server

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
