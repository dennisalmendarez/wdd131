const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
const cityName = document.querySelector('#city-name');
const windSpeedEl = document.querySelector('#wind-speed');
const windChillEl = document.querySelector('#wind-chill');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=35.6771282&lon=139.7197653&appid=979a78909c0d6b4bbfebb4dc1ef4dbd2&units=imperial";



function displayResults(data) {
  const temp = `${data.main.temp}&deg;F`;
  const feelsLike = `${data.main.feels_like}`;
  const desc = data.weather[0].description;
  const windSpeed = `${data.wind.speed} mph`;
  const city = data.name || "Tokyo";


  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);


  cityName.textContent = city;
  currentTemp.innerHTML = temp;
  captionDesc.textContent = desc;
  windSpeedEl.textContent = windSpeed;
  windChillEl.textContent = feelsLike;
}

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();
