"use strict";

  
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=7d25f81a71306eb3ef3609d311f3b054&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const imagesrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = `Temp:${jsObject.main.temp.toFixed(0)}°F`;
        document.getElementById('humidity').textContent = `Hum:${jsObject.main.humidity}%`;

        document.querySelector('.img-actual').setAttribute('src', imagesrc);
        document.querySelector('.img-actual').setAttribute('alt', desc);
        
    });

    const fapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5014130&appid=7d25f81a71306eb3ef3609d311f3b054&units=imperial";
    fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const time = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        time.forEach(forecast => {
            if (day > 2)
            return
            let thedate = new Date(forecast.dt_txt);
            const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
            const desc = forecast.weather[0].description;
            document.querySelector(`#weekday${day+1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#fcondition${day+1}`).textContent = desc;
            document.querySelector(`#ftemp${day+1}`).textContent = `Temp: ${forecast.main.temp.toFixed(0)}°F`;
            document.querySelector(`#fhumidity${day+1}`).textContent = `Hum: ${forecast.main.humidity} %`;
            
            document.querySelector(`#icon${day+1}`).setAttribute('src', imagesrc);
            document.querySelector(`#icon${day+1}`).setAttribute('alt', desc);
            day++;
        });
    });
