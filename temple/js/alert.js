const alertURL = "https://api.openweathermap.org/data/2.5/forecast?id=5014130&appid=7d25f81a71306eb3ef3609d311f3b054&units=imperial";
fetch(alertURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        const wealert = jsonObject['alerts'];
        const container = document.querySelectorAll('div.weatherNatAlert');
        if(wealert === undefined || wealert.length == 0) {
        container.style.display = 'none';          
        }

        else {
            container.style.display = 'none';
            container.style.display = 'block';
            document.getElementById('usr').textContent = jsonObject.alerts.sender_name;
            document.getElementById('weatherNatAlert').textContent = jsonObject.alerts.event;
            document.getElementById('description-alert').textContent = jsonObject.alerts.description;
            
        }
    });