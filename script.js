const Apikey = "db9e01153237fa537b6df499a7b89066";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityname = document.querySelector(".search-bar input");
const searchbtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherStatus = document.querySelector(".weather-status");



async function checkWeather(city){
    const response = await fetch(ApiUrl + city+ `&appid=${Apikey}`);
    var data = await response.json();
    console.log(data);
    // console.log(data.weather[0].main);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";


        if(data.weather[0].main=="Clouds"){
            weatherIcon.src = "./weather-app-img/images/clouds.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "./weather-app-img/images/clear.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main=="Haze"){
            weatherIcon.src = "./weather-app-img/images/snow.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "./weather-app-img/images/mist.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "./weather-app-img/images/drizzle.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src = "./weather-app-img/images/rain.png";
            weatherStatus.innerHTML = data.weather[0].main;
        }

        document.querySelector(".weather").style.display = "block";

}
searchbtn.addEventListener("click", (event)=>{
    event.preventDefault();
    checkWeather(cityname.value);
    localStorage.setItem("city", cityname.value);
})
cityname.addEventListener("keyup", function (e){
    e.preventDefault();
    if(e.key=='Enter'){
        checkWeather(cityname.value);
        localStorage.setItem("city", cityname.value);
    }
})

const prevSearch = localStorage.getItem(cityname.value);
    if(prevSearch){
        cityname.value = prevSearch;
    }



