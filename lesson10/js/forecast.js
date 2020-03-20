const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=50b16ae8477ff34ac4b8bd2d7a08dc0a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    const weatherIcon = document.querySelector('#imagesrc');
    

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);

    for (let i=0; i<fivedayforecast.length; i++) {
        document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;
    }

  
  });

  