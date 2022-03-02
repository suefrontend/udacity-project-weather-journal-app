const apiKey = '03f20d3033382f741229c12ba23e1fc6';
const baseUrl =
	'https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=';

const submitBtn = document.getElementById('generate');
const feelings = document.getElementById('feelings');
const feelValue = feelings.value;
const zipValue = zip.value;
const temperature = 5;

let d = new Date();
const month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const day = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
let newDate = `${day[d.getDay()]} ${
	month[d.getMonth() + 1]
} ${d.getDate()}, ${d.getFullYear()}`;

// Fetch weather data from API
const fetchWeather = async (url, zip, api) => {
	try {
		const res = await fetch(`${url}${zip},us&appid=${api}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.log('Error: ', error);
	}
};

// Fetch weather of specific city from API using zip code
const fetchWeatherByZipCode = async () => {
	const zip = document.getElementById('zip').value;
	try {
		const res = await fetchWeather(baseUrl, zip, apiKey);

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

const postData = async (data) => {
	if (zipValue.length === 0 || feelValue.length === 0) return;

	const res = await fetch('/weather/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	let newData = await res.json();
	return newData;
};

// Render all the info on the page
const updateUI = async () => {
	// Retrieve updated data from /weather route
	const request = await fetch('/weather');

	try {
		const data = await request.json();

		document.getElementById('temp').innerHTML =
			Math.round(data.temp) + 'degrees';
		document.getElementById('date').innerHTML = data.date;
		document.getElementById('content').innerHTML = data.content;
		document.getElementById('city').innerHTML = data.city;
		document.getElementById('overall').innerHTML = data.description;
	} catch (error) {
		console.log('Error: ', error);
	}
};

submitBtn.addEventListener('click', fetchWeatherByZipCode);
