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
   let cityElement = document.querySelector(".city");
   let temperatureElement = document.querySelector(".temperature");
   let desctiptionElement = document.querySelector(".description");
   let humidityElement = document.querySelector(".humidity");
   let windElement = document.querySelector(".wind");
   let iconElement = document.querySelector(".icon");

   cityElement.innerHTML = (response.data.city);
   temperatureElement.innerHTML = Math.round(response.data.temperature.current);
   desctiptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = response.data.temperature.humidity;
   windElement.innerHTML = Math.round(response.data.wind.speed);
   iconElement.innerHTML = response.data.condition.icon_url;

 }


 let apiKey = "7affbfo33ct9024044b5070bf6ca420b";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(showTemperature);


