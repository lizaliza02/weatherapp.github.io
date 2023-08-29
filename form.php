<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEATHER APP</title>
    <link rel="Website icon" type="png" href="icon2.png">
    <link rel="stylesheet" href="weather_2357940.css" />
</head>
<body>
<div class="card">
    <div class="search">
        <input type="text" placeholder="Enter City Name..." spellcheck="false"> 
        <button id="searchButton">Search</button>
    </div>
    <div class="error">
        <p>INVALID CITY NAME</p>
    </div>
    <div class ="weather">
        <img src="rain.png"  class="weather-icon"> 
        <h1 class ="temp"></h1> 
        <h2 class="city"></h2>
        <div class="details">
           <div class="col">
              <img src="humidity.png">
              <div>
                <p class="humidity"></p>
           
                </div>
            </div>

            <div class="col">
              <img src="wind.png">
              <div>
                <p class="wind"></p>
                
                
            </div>
          
           
        </div>
      
    </div>
    <p class="history">Need Previous data?<a href="history.php"> Click me</a></p> 

</div>
</div>
<script src="weather_2357940.js"></script>
</body>
</html>
