// Adding Current Time //
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let h6 = document.querySelector("h6");
h6.innerHTML = `${day}  ${hours}:${minutes}`;

// Search Engine //
  
 function showTemperature (response) {
    document.querySelector(".city").innerHTML = response.city;
    document.querySelector(".des").innerHTML = response.condition.description;
    document.querySelector(".humidity").innerHTML = Math.round(response.temperature.humidity);
    document.querySelector(".wind").innerHTML = Math.round(response.wind.speed);
    
 }

function findCity (city) {

 let apiKey = "7affbfo33ct9024044b5070bf6ca420b";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showTemperature);
}

function printSubmit(event) {

 event.preventDefault();
 let city = document.querySelector("#search-text-input").value;
 findCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", printSubmit);

findCity("Cape Town");
