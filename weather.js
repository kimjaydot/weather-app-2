/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

// write your code here
let city = prompt("Enter a City");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
*/

//Feature 1
let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
console.log(days[0]);

let todaysDate = new Date();

let showTodayDate = days[todaysDate.getDay()];
let todayHour = todaysDate.getHours();

if (todayHour < 10) {
  todayHour = `0${todayHour}`;
}

let todayMins = todaysDate.getMinutes();

if (todayMins < 10) {
  todayMins = `0${todayMins}`;
}

let todaysDate2 = document.querySelector(".theDate p");
todaysDate2.innerHTML = `${showTodayDate} ${todayHour}: ${todayMins}`;

//Feature 2

function displayWeatherCondition(response) {
  document.querySelector(".pearLand").innerHTML = response.data.name;
  document.querySelector("#currentWeatherTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weatherFeels").innerHTML =
    response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  //Place API Call in search function

  let city = document.querySelector(".enterCity").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  //position.coords.latitude;
  //position.coords.longitude;
  let apiUrlLoc = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlLoc).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault;
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// let inputCity = document.querySelector(".enterCity");
//let cityChanger = document.querySelector(".pearLand");
//cityChanger.innerHTML = `${inputCity.value}`;

let searchCityForm = document.querySelector("#search-city");
searchCityForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#currentLocBtn");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
