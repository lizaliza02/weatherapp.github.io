
// NAME: ALIZA DANGI
// ID: 2357940

let apiKey = "b890ec922fadd9c4c28cdd5ce208734c"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(apiUrl);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        let data = await response.json();

        console.log("Data",data)

    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ "km/hr";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./mist.png";
    }

    }
  document.querySelector(".weather").style.display="block";
}

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather("Atmore");
