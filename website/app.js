// Acquire API credentials from OpenWeatherMap website.
// Use your credentials and the base url to create global variables

// at the top of your app.js code.
const apiKey = '03f20d3033382f741229c12ba23e1fc6';
const baseUrl =
	'https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=';

/* Global Variables */
const submitBtn = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const feelValue = feelings.value;
const zipValue = zip.value;
const temperature = 5;

let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.

// Inside that callback function call your async GET request with the parameters:
//// base url
//// user entered zip code (see input in html with id zip)
//// personal API key
const fetchWeather = async (url, zip, api) => {
	try {
		const res = await fetch(`${url}${zip},us&appid=${api}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Error: ', error);
	}
};

// Fetch data based on zip code
const fetchWeatherByZipCode = async () => {
	const zip = document.getElementById('zip').value;
	try {
		const res = await fetchWeather(baseUrl, zip, apiKey);

		console.log('res.main.temp', res.main.temp);
		console.log('res.weather[0].description', res.weather[0].description);
		console.log('res.name', res.name);

		postData({
			date: newDate,
			content: feelValue,
			temp: res.main.temp,
			description: res.weather[0].description,
			city: res.name,
		});

		updateUI();
	} catch (error) {
		console.log('Error: ', error);
	}
};

const generateJournal = async () => {};

// async function postNewItem(data) {
// 	try {
// 		const feelValue = feelings.value;
// 		const zipValue = zip.value;
// 		const temperature = test.main.temp;

// 		if (zipValue.length === 0 || feelValue.length === 0) return;

// 		const data = {
// 			date: newDate,
// 			temp: temperature,
// 			content: feelValue,
// 		};

// 		console.log('data?', data);
// 		updateData(data);
// 	} catch (error) {
// 		console.log('Error: ', error);
// 	}

// 	// .then((response) => response.json());
// }

// After your successful retrieval of the weather data,
// you will need to chain another Promise that makes a POST request to add the API data,
// as well as data entered by the user, to your app.
const postData = async (data) => {
	// You will need to write another async function to make this POST request.
	// The function should receive a path and a data object.
	// The data object should include
	//// temperature
	//// date
	//// user response
	// Remember, you can access the value of DOM elements by selecting them in your JS code.

	if (zipValue.length === 0 || feelValue.length === 0) return;

	console.log('data in postData', data);

	const res = await fetch('/weather/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	// console.log('response.json()', await res.json());
	// console.log('res', res);

	let newData = await res.json();
	console.log('newData', newData);
	return newData;
};

// Finally, chain another Promise that updates the UI dynamically
// Write another async function that is called after the completed POST request.
const updateUI = async () => {
	// This function should retrieve data from our app,
	const request = await fetch('/weather');

	try {
		// Transform into JSON
		const data = await request.json();

		// select the necessary elements on the DOM (index.html),
		// and then update their necessary values to reflect the dynamic values for:
		//// Temperature
		//// Date
		//// User input
		document.getElementById('temp').innerHTML =
			Math.round(data.temp) + 'degrees';
		document.getElementById('date').innerHTML = data.date;
		document.getElementById('content').innerHTML = data.content;
		document.getElementById('city').innerHTML = data.city;
		document.getElementById('overall').innerHTML = data.description;
	} catch (error) {
		console.log('error', error);
	}
};

// Create a new date instance dynamically with JS

// Create an event listener for the element with the id: generate, with a callback function
// to execute when it is clicked.
// submitBtn.addEventListener('click', fetchWeatherByZipCode);
submitBtn.addEventListener('click', fetchWeatherByZipCode);
