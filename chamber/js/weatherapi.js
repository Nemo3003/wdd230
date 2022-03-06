const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3429721&appid=7d25f81a71306eb3ef3609d311f3b054&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    let temp = jsObject.main.temp;
    let speed = jsObject.wind.speed;
    const windChillCelsius = (temperature, windSpeed) =>
 13.12 +
  0.6215 * temperature -
  11.37 * windSpeed ** 0.16 +
  0.3965 * temperature * windSpeed ** 0.16;
    let actual_wind_chill = windChillCelsius(temp, speed)
    document.getElementById('wind-speed').textContent = `Wind speed: ${jsObject.wind.speed} km/h`;
    if (temp > 10 || speed > 177) {
      document.getElementById('chill').textContent = `Wind chill: N/A`
    }else {
      document.getElementById('chill').textContent = `Wind chill: ${Math.round(actual_wind_chill)} C`
    }
    
    document.getElementById('humidity').textContent = `Humidity: ${jsObject.main.humidity}%`;
    document.getElementById('description').textContent = `${desc}`;
    document.getElementById('temp').textContent = `Temp ${jsObject.main.temp} C`;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
  });
