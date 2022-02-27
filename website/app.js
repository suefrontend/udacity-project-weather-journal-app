// Acquire API credentials from OpenWeatherMap website.
// Use your credentials and the base url to create global variables
// at the top of your app.js code.

/* Global Variables */

// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
//// base url
//// user entered zip code (see input in html with id zip)
//// personal API key

// After your successful retrieval of the weather data, you will need to chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.

// You will need to write another async function to make this POST request.
// The function should receive a path and a data object.
// The data object should include
//// temperature
//// date
//// user response
// Remember, you can access the value of DOM elements by selecting them in your JS code.

// Finally, chain another Promise that updates the UI dynamically Write another async function that is called after the completed POST request. This function should retrieve data from our app, select the necessary elements on the DOM (index.html), and then update their necessary values to reflect the dynamic values for:
//// Temperature
//// Date
//// User input

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

fetch('./projectData')
	.then((response) => response.json())
	.then((data) => {
		console.log('data', data);
	});
