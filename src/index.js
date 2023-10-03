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

// Show Temperature //
  
 function showTemperature (response) {
   let cityElement = document.querySelector(".city");
   let temperatureElement = document.querySelector(".temperature");
   let desctiptionElement = document.querySelector(".description");
   let humidityElement = document.querySelector(".humidity");
   let windElement = document.querySelector(".wind");
   let iconElement = document.querySelector(".icon");
   let dateElement = document.querySelector(".date");

   cityElement.innerHTML = (response.data.city);
   temperatureElement.innerHTML = Math.round(response.data.temperature.current);
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

 let form = document.querySelector("#search-form");
 form.addEventListener("submit", handleSubmit);

