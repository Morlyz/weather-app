const apiKey = "ffc76fc5e820807892b871398e239fdb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const temp = document.querySelector("p.temp");
const locale = document.querySelector("p.location");
const humid = document.querySelector("p.humidity");
const wind = document.querySelector("p.wind");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    console.log(data);
    
    temp.innerHTML = Math.round(data.main.temp)  + " &degC"; 
    humid.innerHTML = `${data.main.humidity} % <span> humidity </span> `; 
    wind.innerHTML = `${data.wind.speed} Km/hr <span> wind speed </span>`; 
    locale.innerHTML = data.name; 

    let icon = data.weather[0].main;
    document.querySelector("img.weather").src = `images/${icon}.png`;

}

const getLocale = document.querySelector("input.place");
const btnSearch = document.querySelector("button.btn");


btnSearch.addEventListener("click", ()=>{checkWeather(getLocale.value)})