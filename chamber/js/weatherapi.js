const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3429721&appid=7d25f81a71306eb3ef3609d311f3b054&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById('wind-speed').textContent = `Wind speed: ${jsObject.wind.speed}`;
    document.getElementById('chill').textContent = `Wind chill${jsObject.wind.deg}`
    document.getElementById('humidity').textContent = `Humidity:${jsObject.main.humidity}`;
    document.getElementById('description').textContent = `description${jsObject.weather.description}`;
    document.getElementById('temp').textContent = `Current temp: ${jsObject.main.temp}`;
    document.getElementById('icon').textContent = `${jsObject.weather.icon}`;
  });
