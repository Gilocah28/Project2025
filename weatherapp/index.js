const API_KEY = "36dc8265f5656a677786e03274dcaa65";
const cityName = document.querySelector(".city");
const tempData = document.querySelector(".temp");
const humidityData = document.querySelector(".humidity");
const windData = document.querySelector(".wind");
const weatherImage = document.querySelector(".weather-icon");
const btnSearch = document.getElementById("btn-search");
const inputSearch = document.getElementById("input-search");
const weatherCon = document.querySelector(".weather");
const errorCol = document.querySelector(".error");
const errorMessage = document.querySelector(".errorMessage");


async function callWeather(city) {
  errorCol.style.display = "none";

  if (city) {
    weatherCon.style.display = "block";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    cityName.textContent = data.name;
    tempData.textContent = Math.floor(data.main.temp) + "°C";
    humidityData.textContent = data.main.humidity + "%";
    windData.textContent = data.wind.speed + " " + "km/h";

    const weatherData = data.weather[0].main;

    /*if (weatherData === "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (weatherData === "Clear") {
      weatherImage.src = "images/clear.png";
    } else if (weatherData === "Rain") {
      weatherImage.src = "images/rain.png";
    } else if (weatherData === "Mist") {
      weatherImage.src = "images/mist.png";
    } else if (weatherData === "Drizzle") {
      weatherImage.src = "images/drizzle.png";
    } else if (weatherData === "Snow") {
      weatherImage.src = "images/snow.png";
    }*/
    switch (weatherData) {
      case "Clouds":
        weatherImage.src = "images/clouds.png";
        break;
      case "Clear":
        weatherImage.src = "images/clear.png";
        break;
      case "Rain":
        weatherImage.src = "images/rain.png";
        break;
      case "Mist":
        weatherImage.src = "images/mist.png";
        break;
      case "Drizzle":
        weatherImage.src = "images/drizzle.png";
        break;
      case "Snow":
        weatherImage.src = "images/snow.png";
        break;
      default:
        weatherImage.src = "";
    }
  } else {
    weatherCon.style.display = "none";
    errorCol.style.display = "block";
    errorMessage.textContent = "No City enter or invalid city";
  }
}
btnSearch.addEventListener("click", search);

function search() {
  const inputValue = inputSearch.value;
  callWeather(inputValue);
}
