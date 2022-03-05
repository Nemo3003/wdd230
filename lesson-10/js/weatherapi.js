const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3429721&appid=7d25f81a71306eb3ef3609d311f3b054&units=metric";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp.toFixed(0);
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });
  