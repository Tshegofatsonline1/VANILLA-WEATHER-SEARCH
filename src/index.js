// Adding Current Time //
function formatDate (timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
   hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
   minutes = `0${minutes}`;
}

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[date.getDay()];

return `${day}  ${hours}:${minutes}`;

}
//WEATHER FORECAST//
function showForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Tues", "Wed", "Thu", "Fri"];
  days.forEach(function (day){

    forecastHTML = 
    forecastHTML + 
    `
    <div class="col-2">
        <div class="day">${day}</div>
        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" width="42"><br>
        <span class="forecast-temperature-max">23°</span>
        <span class="forecast-temperature-min">13°</span>
    </div>
  
    `;
    
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;

}



// Show Temperature //
  
 function showTemperature (response) {
   let cityElement = document.querySelector(".city");
   let temperatureElement = document.querySelector(".temperature");
   let desctiptionElement = document.querySelector(".description");
   let humidityElement = document.querySelector(".humidity");
   let windElement = document.querySelector(".wind");
   let iconElement = document.querySelector(".icon");
   let dateElement = document.querySelector(".date");



   celsiusTemperature = response.data.temperature.current;

   temperatureElement.innerHTML = Math.round(celsiusTemperature);
   cityElement.innerHTML = (response.data.city);
   desctiptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = response.data.temperature.humidity;
   windElement.innerHTML = Math.round(response.data.wind.speed);
   iconElement.setAttribute("src", `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
   dateElement.innerHTML = formatDate(response.data.time * 1000);


 }

 function search(city) {
   let apiKey = "7affbfo33ct9024044b5070bf6ca420b";
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(showTemperature);
 }

 function handleSubmit(event) {
   event.preventDefault();
   let cityInputElement = document.querySelector("#city-input");
   search(cityInputElement.value);
   
 }

 function showFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
 }

 function showCelsiusTemperature(event) {
event.preventDefault();
let temperatureElement = document.querySelector(".temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);

}
let = celsiusTemperature = null;



 let form = document.querySelector("#search-form");
 form.addEventListener("submit", handleSubmit);

 let fahrenheitLink = document.querySelector("#fahrenheiht-link");
 fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

 let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);

 search("New York");
 showForecast();

