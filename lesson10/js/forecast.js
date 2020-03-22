const apiURL5 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=669794a2364d1c99a3fc675b67354b5c';

fetch(apiURL5)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        const fiveDays = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        for (let i = 0; i < fiveDays.length; i++) {
            var d = new Date(fiveDays[i].dt_txt);
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            document.getElementById(`day${i+1}`).textContent = weekday[d.getDay()];

            document.getElementById(`temp${i+1}`).textContent = fiveDays[i].main.temp + "°F";

            const imagesrc = 'https://openweathermap.org/img/w/' + fiveDays[i].weather[0].icon + '.png';
            const desc = fiveDays[i].weather[0].description;
            document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i+1}`).setAttribute('alt', desc);
        }

     //   document.getElementById('current').textContent = fiveDays[0].weather[0].description;

    //    document.getElementById('speed').textContent = fiveDays[0].wind.speed;

     //   document.getElementById('humid').textContent = fiveDays[0].main.humidity;
    });