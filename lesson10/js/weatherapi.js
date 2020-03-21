const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=50b16ae8477ff34ac4b8bd2d7a08dc0a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');
    const temp = document.querySelector('#high-temp');
    const humidity = document.querySelector('#humidity');
    const current = document.querySelector('#current')
    const windSpeed = document.querySelector('#windSpeed')
    const weatherIcon = document.querySelector('#imagesrc');

    currentTemp.textContent = jsObject.weather[0].main;
    temp.textContent = jsObject.main.temp; 
    humidity.textContent = jsObject.main.humidity;
    windSpeed.textContent = jsObject.wind.speed;


    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });