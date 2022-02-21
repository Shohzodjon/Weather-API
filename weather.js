

const city = document.querySelector('#city');
const changeBtn = document.querySelector('#w-change-btn');

const wCountry = document.querySelector('#w-location');
const wLocation = document.querySelector('#w-country');
const wCondition = document.querySelector('#w-desc');
const wTemprature = document.querySelector('#w-temp');
const wMaxTemprature = document.querySelector('#w-max-temp');
const wMinTemprature = document.querySelector('#w-min-temp');
const wIcon = document.querySelector('#w-icon');
const wHumidity = document.querySelector('#w-humidity');
const wPressure = document.querySelector('#w-pressure');
const wWind = document.querySelector('#w-wind');






const countryWeather = function(country){
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=2d6a242864886272d5ab939272c6d4b3`)
     .then(function(response){
    return response.json();
     })
     .then(function(data){
        const res = data;
        console.log(data);
        wCountry.textContent = `City : ${res.name}`;
        wLocation.textContent = `Country : ${res.sys.country}`;
        wCondition.textContent = `Weather condition : ${res.weather[0].main}`;
        wTemprature.textContent = `Temprature : ${res.main.temp} C`;
        wMaxTemprature.textContent = `Max Temp ${res.main.temp_max} C`;
        wMinTemprature.textContent = `Min Temp ${res.main.temp_min} C `;
        wIcon.src= `http://openweathermap.org/img/w/${res.weather[0].icon}.png`;
        wHumidity.textContent = `Humidity : ${res.main.humidity}`;
        wPressure.textContent = `Pressure : ${res.main.pressure}`;
        wWind.textContent = `Wind speed : ${res.wind.speed} km/hour`;
     })
    .catch(err=>{
      
       wCountry.textContent = err;
       wLocation.textContent= '';
       wCondition.textContent='';
       wTemprature.textContent='';
       wMaxTemprature.textContent ='';
       wMinTemprature.textContent='';
       wIcon.style.display = 'none';
       wHumidity.textContent='Humidity ';
       wPressure.textContent = 'Pressure ';
       wWind.textContent = 'Wind ';
    });
}


changeBtn.addEventListener('click', function(){
      if(city.value !==''){
         countryWeather(city.value);
      }  
      city.value = '';
})




