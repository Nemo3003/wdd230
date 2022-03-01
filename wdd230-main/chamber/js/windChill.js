// Script for Wind Chill
// let weather = document.querySelector('.desc');
// let tempFahr = document.querySelector('.temp');
// let tempCelsius = document.querySelector('.temp-Cels');
// let windSpeed_ = document.querySelector('.wind-speed');


fetch('https://api.openweathermap.org/data/2.5/weather?id=' +5660340+ '&appid=caa8540702ef690bc84e562267149524&units=imperial')
    .then(response => response.json())
    .then(data => {
        let weatherValue = data['weather'][0]['description'];
        let tempValue = data['main']['temp'];
        let tempCelsValue = Math.round(((tempValue - 32) * (5 / 9)) * 100 / 100);
        let windSpeedValueInMph = data['wind']['speed'];
        let windSpeedValueInKph = Math.round(windSpeedValueInMph * 1.609);

        document.querySelector('.desc').innerHTML = weatherValue.toUpperCase([0]);
        document.querySelector('.temp').innerHTML = 'Temperature: ' + tempValue + ' &#8457';
        document.querySelector('.temp-Cels').innerHTML = tempCelsValue + ' &#8451';
        document.querySelector('.wind-speed').innerHTML = 'Wind Speed: ' + windSpeedValueInMph + ' MPH';
        document.querySelector('.kph').innerHTML = ' | ' + windSpeedValueInKph + ' KPH';

        if ((tempValue <= 50 && windSpeedValueInMph > 3 ) || (tempCelsValue <= 10 && windSpeedValueInKph > 4.8)) {
            
            document.querySelector('.wind-chill').innerHTML = 'Wind Chill: ' + computeWindChillInF(tempValue, windSpeedValueInMph) + ' &#8457 ';
            document.querySelector('.windChillInCel').innerHTML = ' | ' + computeWindChillInc(tempCelsValue, windSpeedValueInKph) + ' &#8451 ';
        }
        
        function computeWindChillInF(t, s) {
            let windChill =  35.74 + .06215 * t - 35.75 * s ** 0.16 + .4275 * t * s ** .16;
            return Math.round(windChill * 100 / 100);
        }

        function computeWindChillInc(t, s) {
            let windChill = 13.12 + 0.6215 * t - 11.37 * s ** 0.16 + 0.3965 * t * s ** 0.16;
            return Math.round(windChill * 100 / 100);
        }

    })
    .catch(function() {
		// catch any errors
	});



