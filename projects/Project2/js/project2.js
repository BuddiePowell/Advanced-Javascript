// Name: Buddie Powell
// Date: 3/24/2026
// course: Advanced JavaScript hybrid monday/wednesday 10:30am-12:10pm

// constants for the username and country code for the geonames api
const USERNAME = "bpowell5";
const COUNTRYCODE = "US";

// function to initialize the event listener for the button click
const init = () => {
  let weatherButton = document.querySelector("#getWeather");
  weatherButton.addEventListener("click", getLocation);
};

// this function gets the location based on the postal code entered by the user and then calls the getWeather function with the latitude and longitude of that location
const getLocation = () => {
  let enteredpostalcode = document.querySelector("#zipcode").value;

  // Input validation to check if the user put in a zipcode with 5 letters
  if (enteredpostalcode.length !== 5 || isNaN(enteredpostalcode)) {
    displayError("Please enter a valid 5-digit ZIP code");
    return;
  }

  clearResults();

  // Combined URL with parameters
  let url = `https://secure.geonames.org/postalCodeSearchJSON?username=${USERNAME}&postalcode=${enteredpostalcode}&country=${COUNTRYCODE}`;

  // this creates a new XMLHttpRequest object to get the location data from the geonames api
  // and then calls the getWeather function with the latitude and longitude of that location
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);
      // display the data to the cosole, if the data postal codes and its length are greater than 0
      // it will get the lat,lng and city postal codes and display them in the getweather function
      // if its less than 0 or not postal codes exist it will display an error
      console.log(data);
      if (data.postalCodes && data.postalCodes.length > 0) {
        let lat = data.postalCodes[0].lat;
        let lng = data.postalCodes[0].lng;
        let city = data.postalCodes[0].placeName;
        getWeather(lat, lng, city);
      } else {
        displayError("No location found for ZIP " + enteredpostalcode);
      }
    }
  };
  xhr.send(null);
};

// this function gets the latitude and longitude from the getLocation function and fetches the weather data from the geonames findnearbyweather api
const getWeather = (lat, lng, city) => {
  console.log("Latitude: " + lat);
  console.log("Longitude: " + lng);
  // this is the url to get the weather from the geonames api along with the username, latitude and longitude
  let url = `https://secure.geonames.org/findNearByWeatherJSON?username=${USERNAME}&lat=${lat}&lng=${lng}`;
  // gets a new xhr request to get the url to display the weather data from the url
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText);
      // initalizes the weatherdata variable as null
      // if the weather data is found the weather data will be displayed
      let weatherData = null;
      if (data.weatherObservations && data.weatherObservations[0]) {
        weatherData = data.weatherObservations[0];
      } else if (data.weatherObservation) {
        weatherData = data.weatherObservation;
      } else if (data.observation) {
        weatherData = data.observation;
      }
      // if the weather data is found it will display the weather data along with the city
      // if the weatherdata is not found it will display an error saying no weather stations where found
      if (weatherData) {
        displayWeather(weatherData, city);
      } else {
        displayError("No weather stations found");
      }
    }
  };
  xhr.send(null);
};

// this function converts temperature from celsius to fahrenheit and returns it
const celsiusToFahrenheit = (celsius) => {
  return Math.round((parseFloat(celsius) * 9) / 5 + 32);
};

// this function displays the weather data which includes the city, the tempature and the wind speed
const displayWeather = (weatherData, city) => {
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = "";
  // this stores the weatherdata tempature, if its undefined it will store it as 0
  // then convert the tempature from celsius to fahrehiet using the celsiusToFahrenheit function
  // finally it will convert the windspeed
  const tempC = weatherData.temperature || 0;
  const tempF = celsiusToFahrenheit(tempC);
  const windSpeed = Math.round((weatherData.windSpeed || 0) * 0.621371);

  // displays the output of the citys name, the tempature and the windspeed in the console
  console.log("City:", city);
  console.log("Temperature:", tempF + "°F (" + tempC + "°C)");
  console.log("Wind Speed:", windSpeed + " mph");

  // this displays the city name to the page
  const cityHeader = document.createElement("h3");
  cityHeader.textContent = city;
  resultsDiv.appendChild(cityHeader);

  // this function creates the tempature and displays it to the page and console
  // if the tempature is below 34F it will display a coldtemp icon next to the tempature
  // if the tempature is above 83F it will display a hottemp icon next to the tempature
  const tempP = document.createElement("p");
  tempP.innerHTML = `Temperature: ${tempF}°F`;

  if (tempF < 34) {
    const coldImg = document.createElement("img");
    coldImg.src = "images/coldtemp.png";
    coldImg.alt = "Cold";
    coldImg.className = "weather-icon";
    tempP.appendChild(coldImg);
    console.log("Cold icon displayed (< 34°F)");
  } else if (tempF > 83) {
    const hotImg = document.createElement("img");
    hotImg.src = "images/hottemp.png";
    hotImg.alt = "Hot";
    hotImg.className = "weather-icon";
    tempP.appendChild(hotImg);
    console.log("Hot icon displayed (> 83°F)");
  }
  resultsDiv.appendChild(tempP);

  // displays the windspeed to the page
  // if the windspeed is over 15 MPH then it will display the wind icon next to it
  const windP = document.createElement("p");
  windP.innerHTML = `Wind Speed: ${windSpeed} mph`;
  // displays the page to the console and displays the windicon if the windspeed is over 15 MPH
  if (windSpeed > 15) {
    const windImg = document.createElement("img");
    windImg.src = "images/wind.png";
    windImg.alt = "Windy";
    windImg.className = "weather-icon";
    windP.appendChild(windImg);
    console.log("Wind icon displayed (> 15 mph)");
  }
  resultsDiv.appendChild(windP);

  resultsDiv.style.display = "block";
};
// display the error messages
const displayError = (message) => {
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = "";

  const errorP = document.createElement("p");
  errorP.textContent = message;
  resultsDiv.appendChild(errorP);
  resultsDiv.style.display = "block";
  console.error("Error:", message);
};
// clears the results page
const clearResults = () => {
  const resultsDiv = document.querySelector("#results");
  resultsDiv.innerHTML = "";
  resultsDiv.style.display = "none";
};

// loads the init function when the window loads to set up the event listener for the button click
window.onload = init;
